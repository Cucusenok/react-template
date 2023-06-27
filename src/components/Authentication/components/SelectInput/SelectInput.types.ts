import {
  FeaturesType,
  FormValues,
} from '@components/Authentication/Registration';
import { Control } from 'react-hook-form';

import { FieldRules } from '..';

export interface SelectProps {
  label: string;
  name: 'email' | 'required' | 'confirmPassword' | 'accountType' | 'password';
  size?: 'small' | 'medium';
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  type?: string;
  errorMessage?: string;
  fullWidth?: boolean;
  rules?: FieldRules;
  control: Control<FormValues>;
  selectItems: FeaturesType[];
}
