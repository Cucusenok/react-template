import { ValidationRule } from 'react-hook-form';

const required: ValidationRule<boolean> = {
  value: true,
  message: 'Required field',
};

const minLength: ValidationRule<number> = {
  value: 6,
  message: 'Minimum of 6 characters',
};

const emailPattern: ValidationRule<RegExp> = {
  message: 'Enter the correct email',
  value:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

export const confirmPasswordRules = {
  required,
  minLength,
};
export const emailRules = { required, pattern: emailPattern };
export const passwordRules = { required, minLength };
export const typeRules = { required };
