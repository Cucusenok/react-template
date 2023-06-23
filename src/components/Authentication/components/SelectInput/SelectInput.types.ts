import { FeaturesType } from '@components/Authentication/Registration';
import { Control } from 'react-hook-form';

export interface SelectProps {
  label: string;
  name: string;
  size?: 'small' | 'medium';
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  type?: string;
  errorMessage?: string;
  fullWidth?: boolean;
  required?: boolean;
  control: Control<any>;
  selectItems: FeaturesType[];
}
