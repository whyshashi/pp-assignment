import React from 'react';
import PropTypes from 'prop-types';

const DateInput = ({ label, value, onChange, min, max, styles }) => {
  const isDisabled = !value || (min && new Date(value) < new Date(min)) || 
                     (max && new Date(value) > new Date(max));

  return (
    <div className="date-input" style={{ marginBottom: '10px' }}>
      <label style={{ 
        display: 'block', 
        marginBottom: '5px',
        fontSize: styles.fontSize,
        color: styles.fontColor,
        opacity: isDisabled ? 0.5 : 1
      }}>
        {label}
      </label>
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={min}
        max={max}
        disabled={isDisabled}
        style={{
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontSize: styles.fontSize,
          color: styles.fontColor,
          backgroundColor: isDisabled ? '#f5f5f5' : styles.backgroundColor,
          cursor: isDisabled ? 'not-allowed' : 'pointer'
        }}
      />
    </div>
  );
};

DateInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.string,
  max: PropTypes.string,
  styles: PropTypes.object.isRequired
};

export default DateInput; 