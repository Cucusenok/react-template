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
