import { FeaturesType } from '@components/Authentication/Registration/Registration.types';
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
} from '@mui/material';
import React from 'react';

import { TariffCard, TariffCardHeader, TariffCardProps } from '.';

export const TariffCardItem = (props: TariffCardProps) => {
  const { variant, setSelectedTariff, tariff } = props;
  return (
    <TariffCard>
      <CardActionArea onClick={() => setSelectedTariff(tariff.id)}>
        <TariffCardHeader>{tariff.price}</TariffCardHeader>
        <CardContent sx={{ minHeight: '145px' }}>
          <Box sx={{ textAlign: 'center' }}>
            {tariff?.features?.map((feature: FeaturesType) => (
              <p style={{ margin: '4px auto' }} key={feature.id}>
                {feature.title}
              </p>
            ))}
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button
          variant={variant}
          onClick={() => setSelectedTariff(tariff.id)}
          size="small"
        >
          {tariff.price}
        </Button>
      </CardActions>
    </TariffCard>
  );
};
