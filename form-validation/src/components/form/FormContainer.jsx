import React, { useReducer, useEffect } from 'react';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import FormSelect from './FormSelect';
import { validateField } from './validation';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        values: {
          ...state.values,
          [action.field]: action.value
        },
        errors: {
          ...state.errors,
          [action.field]: ''
        }
      };
    case 'SET_ERROR':
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: action.error
        }
      };
    case 'RESET_FORM':
      return {
        values: action.initialValues,
        errors: {}
      };
    default:
      return state;
  }
};

const FormContainer = ({ 
  config, 
  onSubmit, 
  style = {},
  initialValues = {},
  shouldReset = false 
}) => {
  const [state, dispatch] = useReducer(formReducer, {
    values: initialValues,
    errors: {}
  });

  useEffect(() => {
    if (shouldReset) {
      dispatch({ type: 'RESET_FORM', initialValues });
    }
  }, [shouldReset, initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_FIELD', field: name, value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldConfig = config.fields.find(field => field.name === name);
    const error = validateField(value, fieldConfig);
    dispatch({ type: 'SET_ERROR', field: name, error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let hasErrors = false;
    const newErrors = {};

    config.fields.forEach(field => {
      const value = state.values[field.name];
      const error = validateField(value, field);
      if (error) {
        hasErrors = true;
        newErrors[field.name] = error;
      }
    });

    if (hasErrors) {
      Object.entries(newErrors).forEach(([field, error]) => {
        dispatch({ type: 'SET_ERROR', field, error });
      });
      return;
    }

    onSubmit(state.values);
  };

  const renderField = (fieldConfig) => {
    const commonProps = {
      label: fieldConfig.label,
      name: fieldConfig.name,
      value: state.values[fieldConfig.name] || '',
      onChange: handleChange,
      onBlur: handleBlur,
      error: state.errors[fieldConfig.name],
      required: fieldConfig.required,
      placeholder: fieldConfig.placeholder,
      style: fieldConfig.style
    };

    switch (fieldConfig.type) {
      case 'textarea':
        return <FormTextArea key={fieldConfig.name} {...commonProps} />;
      case 'select':
        return (
          <FormSelect
            key={fieldConfig.name}
            {...commonProps}
            options={fieldConfig.options}
            multiple={fieldConfig.multiple}
          />
        );
      default:
        return (
          <FormInput
            key={fieldConfig.name}
            {...commonProps}
            type={fieldConfig.type || 'text'}
          />
        );
    }
  };

  return (
    <form onSubmit={handleSubmit} style={style}>
      {config.fields.map(renderField)}
      <button type="submit" className="submit-button">
        {config.submitText || 'Submit'}
      </button>
    </form>
  );
};

export default FormContainer; 