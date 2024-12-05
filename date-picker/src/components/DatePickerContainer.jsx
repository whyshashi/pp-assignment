import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import PresetButtons from './PresetButtons';
import CustomDateRange from './CustomDateRange';
import DateDisplay from './DateDisplay';

const DatePickerContainer = ({ 
  onDateChange = () => {},
  styles = {
    fontSize: '14px',
    fontColor: '#333',
    backgroundColor: '#fff'
  }
}) => {
  const [activePreset, setActivePreset] = useState('today');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const formatDate = (date) => {
    return date.toISOString().split('T')[0];
  };

  const handlePresetSelect = (preset) => {
    setActivePreset(preset);
    const today = new Date();
    
    switch (preset) {
      case 'today':
        const todayStr = formatDate(today);
        setStartDate(todayStr);
        setEndDate(todayStr);
        break;
        
      case 'yesterday':
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = formatDate(yesterday);
        setStartDate(yesterdayStr);
        setEndDate(yesterdayStr);
        break;
        
      case 'thisMonth':
        const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        setStartDate(formatDate(firstDayOfMonth));
        setEndDate(formatDate(lastDayOfMonth));
        break;
        
      case 'lastMonth':
        const firstDayOfLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        const lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        setStartDate(formatDate(firstDayOfLastMonth));
        setEndDate(formatDate(lastDayOfLastMonth));
        break;
        
      case 'custom':
        if (!startDate || !endDate) {
          setStartDate(formatDate(today));
          setEndDate(formatDate(today));
        }
        break;
        
      default:
        break;
    }
  };

  useEffect(() => {

    handlePresetSelect('today');
  }, []);

  useEffect(() => {

    onDateChange({ startDate, endDate });
  }, [startDate, endDate, onDateChange]);

  return (
    <div className="date-picker-container" style={{ padding: '20px' }}>
      <PresetButtons
        onPresetSelect={handlePresetSelect}
        activePreset={activePreset}
        styles={styles}
      />
      
      {activePreset === 'custom' && (
        <CustomDateRange
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
          styles={styles}
        />
      )}
      
      {startDate && endDate && (
        <DateDisplay
          startDate={startDate}
          endDate={endDate}
          styles={styles}
        />
      )}
    </div>
  );
};

DatePickerContainer.propTypes = {
  onDateChange: PropTypes.func,
  styles: PropTypes.shape({
    fontSize: PropTypes.string,
    fontColor: PropTypes.string,
    backgroundColor: PropTypes.string
  })
};

export default DatePickerContainer; 