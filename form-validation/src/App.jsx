import React, { useState } from 'react';
import FormContainer from './components/form/FormContainer';
import './styles/form.css';

const App = () => {
  const [shouldResetForm, setShouldResetForm] = useState(false);

  const formConfig = {
    fields: [
      {
        type: 'text',
        name: 'name',
        label: 'Full Name',
        required: true,
        minLength: 2,
        placeholder: 'Enter your full name'
      },
      {
        type: 'email',
        name: 'email',
        label: 'Email',
        required: true,
        pattern: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
        patternError: 'Please enter a valid email address',
        placeholder: 'Enter your email'
      },
      {
        type: 'select',
        name: 'country',
        label: 'Country',
        required: true,
        options: [
          { value: 'us', label: 'United States' },
          { value: 'uk', label: 'United Kingdom' },
          { value: 'ca', label: 'Canada' }
        ]
      },
      {
        type: 'textarea',
        name: 'message',
        label: 'Message',
        required: true,
        minLength: 10,
        placeholder: 'Enter your message'
      }
    ],
    submitText: 'Send Message'
  };

  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
    setShouldResetForm(true);
    setTimeout(() => setShouldResetForm(false), 0);
  };

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '40px auto',
      padding: '20px'
    }}>
      <h1 style={{
        color: '#2d3748',
        marginBottom: '24px',
        fontSize: '2rem',
        fontWeight: '600',
        textAlign: 'center'
      }}>Contact Form</h1>
      <FormContainer
        config={formConfig}
        onSubmit={handleSubmit}
        shouldReset={shouldResetForm}
        style={{
          backgroundColor: 'white',
          padding: '32px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          border: '1px solid #e2e8f0'
        }}
      />
    </div>
  );
};

export default App; 