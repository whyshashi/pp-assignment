import React, { useCallback } from 'react';
import DatePickerContainer from './components/DatePickerContainer';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const handleDateChange = useCallback(({ startDate, endDate }) => {
    console.log('Selected date range:', { startDate, endDate });
  }, []);

  const customStyles = {
    fontSize: '16px',
    fontColor: '#2c3e50',
    backgroundColor: '#f8f9fa'
  };

  return (
    <div className="App" style={{ maxWidth: '800px', margin: '40px auto' }}>
      <h1>Custom Date Picker</h1>
      <ErrorBoundary>
        <DatePickerContainer
          onDateChange={handleDateChange}
          styles={customStyles}
        />
      </ErrorBoundary>
    </div>
  );
}

export default App; 