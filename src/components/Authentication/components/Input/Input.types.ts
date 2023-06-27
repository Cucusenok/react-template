import {
  FieldValues,
  UseControllerProps,
  ValidationRule,
} from 'react-hook-form';
import { FieldPath } from 'react-hook-form/dist/types';

export interface FieldRules {
  required?: ValidationRule<boolean>;
  minLength?: ValidationRule<number>;
  pattern?: ValidationRule<RegExp>;
}

export interface InputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends UseControllerProps<TFieldValues, TName> {
  label: string;
  size?: 'small' | 'medium';
  margin?: 'dense' | 'normal' | 'none';
  type?: string;
  errorMessage?: string;
  fullWidth?: boolean;
  password?: string;
  disabled?: boolean;
}
