import { TariffType } from '@components/Authentication/Registration/Registration.types';
import { Dispatch, SetStateAction } from 'react';

export interface TariffCardProps {
  variant: 'text' | 'outlined' | 'contained';
  setSelectedTariff: Dispatch<SetStateAction<undefined | number>>;
  tariff: TariffType;
}
