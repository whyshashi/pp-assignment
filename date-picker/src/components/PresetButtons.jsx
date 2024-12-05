import React from 'react';

const PresetButtons = ({ onPresetSelect, activePreset, styles }) => {
  const presets = [
    { id: 'today', label: 'Today' },
    { id: 'yesterday', label: 'Yesterday' },
    { id: 'thisMonth', label: 'This Month' },
    { id: 'lastMonth', label: 'Last Month' },
    { id: 'custom', label: 'Custom Range' }
  ];

  return (
    <div className="preset-buttons" style={{ marginBottom: '20px' }}>
      {presets.map(preset => (
        <button
          key={preset.id}
          onClick={() => onPresetSelect(preset.id)}
          style={{
            padding: '8px 16px',
            margin: '0 8px 8px 0',
            borderRadius: '4px',
            border: '1px solid #ccc',
            cursor: 'pointer',
            fontSize: styles.fontSize,
            color: activePreset === preset.id ? '#fff' : styles.fontColor,
            backgroundColor: activePreset === preset.id ? '#007bff' : styles.backgroundColor
          }}
        >
          {preset.label}
        </button>
      ))}
    </div>
  );
};

export default PresetButtons; 