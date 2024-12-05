import React from 'react';
import PropTypes from 'prop-types';
import DateInput from './DateInput';

const CustomDateRange = ({ startDate, endDate, onStartDateChange, onEndDateChange, styles }) => {
  const handleStartDateChange = (newStartDate) => {
    if (new Date(newStartDate) <= new Date(endDate)) {
      onStartDateChange(newStartDate);
    } else {
      alert('Start date cannot be later than end date');
    }
  };

  const handleEndDateChange = (newEndDate) => {
    if (new Date(newEndDate) >= new Date(startDate)) {
      onEndDateChange(newEndDate);
    } else {
      alert('End date cannot be earlier than start date');
    }
  };

  return (
    <div className="custom-date-range">
      <DateInput
        label="From Date"
        value={startDate}
        onChange={handleStartDateChange}
        max={endDate}
        styles={styles}
      />
      <DateInput
        label="To Date"
        value={endDate}
        onChange={handleEndDateChange}
        min={startDate}
        styles={styles}
      />
    </div>
  );
};

CustomDateRange.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  onStartDateChange: PropTypes.func.isRequired,
  onEndDateChange: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired
};

export default CustomDateRange; 