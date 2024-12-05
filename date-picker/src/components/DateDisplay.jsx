import React from 'react';
import PropTypes from 'prop-types';

const DateDisplay = ({ startDate, endDate, styles }) => {
  const formatDateForDisplay = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="date-display" style={{ 
      marginTop: '20px',
      padding: '10px',
      backgroundColor: styles.backgroundColor,
      borderRadius: '4px',
      border: '1px solid #ccc'
    }}>
      <h3 style={{ 
        fontSize: styles.fontSize,
        color: styles.fontColor,
        marginBottom: '10px'
      }}>
        Selected Date Range
      </h3>
      <div style={{ 
        fontSize: styles.fontSize,
        color: styles.fontColor
      }}>
        {startDate === endDate ? (
          <p>Selected Date: {formatDateForDisplay(startDate)}</p>
        ) : (
          <>
            <p>From: {formatDateForDisplay(startDate)}</p>
            <p>To: {formatDateForDisplay(endDate)}</p>
          </>
        )}
      </div>
    </div>
  );
};

DateDisplay.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  styles: PropTypes.object.isRequired
};

export default DateDisplay; 