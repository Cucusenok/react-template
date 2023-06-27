import { FieldValues, UseControllerProps } from 'react-hook-form';
import { FieldPath } from 'react-hook-form/dist/types';

export interface CheckBoxProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends UseControllerProps<TFieldValues, TName> {
  label: string;
  color?: string;
  size?: 'small' | 'medium';
  type?: string;
  errorMessage?: string;
  fullWidth?: boolean;
  required?: boolean;
  disabled?: boolean;
}
