import {
  EmailPatternRule,
  MinLengthRule,
  RequiredRule,
} from './validationRules.types';

const required: RequiredRule = {
  value: true,
  message: 'Required field',
};

const minLength: MinLengthRule = {
  value: 6,
  message: 'Minimum of 6 characters',
};

const emailPattern: EmailPatternRule = {
  message: 'Enter the correct email',
  value:
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
};

export const confirmPasswordRules = {
  required,
  minLength,
};
export const emailRules = { required, minLength, pattern: emailPattern };
export const passwordRules = { required, minLength };
