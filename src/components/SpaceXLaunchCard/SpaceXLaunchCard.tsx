import { Chip } from '@components/Chip';
import {
  Card,
  StyledRow,
} from '@components/SpaceXLaunchCard/SpaceXLaunchCard.styles';
import { GetSpaceXLaunchesQuery } from '@gql/graphql';
import { AccessTimeRounded, CurrencyRuble } from '@mui/icons-material';
import { Typography } from '@mui/material';
import React from 'react';

export type SpaceXLaunchCardProps = NonNullable<
  GetSpaceXLaunchesQuery['launches']
>[number] & {
  price?: number;
};

export const spaceXLaunchCardInitialProps = {
  mission_name: 'Название не задано',
  details: 'Описание не задано',
};

export const SpaceXLaunchCard = ({
  mission_name,
  rocket,
  launch_date_local,
  details,
  price,
}: SpaceXLaunchCardProps) => (
  <Card>
    <StyledRow marginBottom={8} gap={8}>
      <Typography variant="h3" fontWeight="bold">
        {mission_name || mission_name}
      </Typography>
      {rocket?.rocket_name && <Chip label={rocket.rocket_name} />}
    </StyledRow>
    <Typography mb={3}>
      {details || spaceXLaunchCardInitialProps.details}
    </Typography>
    <StyledRow gap={24}>
      {price && (
        <StyledRow gap={8}>
          <CurrencyRuble fontSize="small" sx={{ color: '#B0B0B0' }} />
          <Typography variant="h3">{price.toLocaleString('ru-Ru')}</Typography>
        </StyledRow>
      )}
      {launch_date_local && (
        <StyledRow gap={8}>
          <AccessTimeRounded fontSize="small" sx={{ color: '#B0B0B0' }} />
          <Typography variant="h3">
            {new Date(launch_date_local).toLocaleString('ru-RU')}
          </Typography>
        </StyledRow>
      )}
    </StyledRow>
  </Card>
);
