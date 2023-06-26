import { Control, ValidationRule } from 'react-hook-form';

export interface FieldRules {
  required?: ValidationRule<boolean>;
  minLength?: ValidationRule<number>;
  pattern?: ValidationRule<RegExp>;
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
