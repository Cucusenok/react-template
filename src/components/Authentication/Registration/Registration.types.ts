import { FieldErrors } from 'react-hook-form/dist/types/errors';
import { Control } from 'react-hook-form/dist/types/form';

export type FormValues = {
  confirmPassword: string;
  accountType: string;
  password: string;
  email: string;
  required?: boolean;
};

export type FeaturesType = {
  title: string;
  id: number;
};

export type TariffType = {
  features: FeaturesType[];
  price: string;
  id: number;
};

export interface SignUpFormProps {
  errors: FieldErrors<FormValues>;
  control: Control<FormValues>;
  password: string;
  isValid: boolean;
  onNextClick: () => void;
}

export interface TariffFormProps {
  onSubmit: (selectedTariff: number) => void;
}
