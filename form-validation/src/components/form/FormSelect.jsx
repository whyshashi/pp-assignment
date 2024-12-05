import React from 'react';

const FormSelect = ({ 
  label, 
  name, 
  value, 
  onChange, 
  onBlur, 
  error, 
  options = [], 
  multiple,
  required,
  style = {} 
}) => {
  return (
    <div className="form-field">
      <label>
        {label}
        {required && <span className="required">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        multiple={multiple}
        style={{
          borderColor: error ? 'red' : '#ccc',
          padding: '8px',
          borderRadius: '4px',
          width: '100%',
          ...style
        }}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default FormSelect; 