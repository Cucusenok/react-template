import { Control } from 'react-hook-form';

export interface RequiredRule {
  value?: true;
  message?: string;
}

export interface MinLengthRule {
  value?: number;
  message?: string;
}

export interface EmailPatternRule {
  message?: string;
  value?: RegExp;
}

export interface FieldRules {
  required?: RequiredRule;
  minLength?: MinLengthRule;
  pattern?: EmailPatternRule;
}

export interface InputProps {
  label: string;
  name: string;
  size?: 'small' | 'medium';
  margin?: 'dense' | 'normal' | 'none';
  type?: string;
  errorMessage?: string;
  fullWidth?: boolean;
  rules?: FieldRules;
  control?: Control<any>;
  password?: string;
  disabled?: boolean;
}
