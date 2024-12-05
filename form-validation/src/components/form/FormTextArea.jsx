import React from 'react';

const FormTextArea = ({ 
  label, 
  name, 
  value, 
  onChange, 
  onBlur, 
  error, 
  placeholder, 
  required,
  style = {} 
}) => {
  return (
    <div className="form-field">
      <label>
        {label}
        {required && <span className="required">*</span>}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        style={{
          borderColor: error ? 'red' : '#ccc',
          padding: '8px',
          borderRadius: '4px',
          width: '100%',
          minHeight: '100px',
          ...style
        }}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default FormTextArea; 