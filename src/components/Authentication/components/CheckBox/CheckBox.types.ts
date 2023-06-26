import { Control } from 'react-hook-form';

export interface CheckBoxProps {
  label: string;
  name: string;
  color?: string;
  size?: 'small' | 'medium';
  type?: string;
  errorMessage?: string;
  fullWidth?: boolean;
  required?: boolean;
  control?: Control<any>;
  disabled?: boolean;
}
