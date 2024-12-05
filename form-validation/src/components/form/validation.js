export const validateField = (value, fieldConfig) => {
  if (!fieldConfig) return '';

  if (fieldConfig.required && !value) {
    return `${fieldConfig.label} is required`;
  }

  if (fieldConfig.minLength && value.length < fieldConfig.minLength) {
    return `${fieldConfig.label} must be at least ${fieldConfig.minLength} characters`;
  }

  if (fieldConfig.maxLength && value.length > fieldConfig.maxLength) {
    return `${fieldConfig.label} must be less than ${fieldConfig.maxLength} characters`;
  }

  if (fieldConfig.pattern && !new RegExp(fieldConfig.pattern).test(value)) {
    return fieldConfig.patternError || `${fieldConfig.label} is invalid`;
  }

  return '';
}; 