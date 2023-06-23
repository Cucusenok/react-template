import { Dispatch, SetStateAction } from 'react';

export type RegisterProps = {
  setIsAuth: Dispatch<SetStateAction<string>>;
};

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
