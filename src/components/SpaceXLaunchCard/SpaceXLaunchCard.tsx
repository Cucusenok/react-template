import { Chip } from '@components/Chip';
import {
  Card,
  StyledRow,
} from '@components/SpaceXLaunchCard/SpaceXLaunchCard.styles';
import { SpaceXLaunchCardProps } from '@components/SpaceXLaunchCard/SpaceXLaunchCard.types';
import { AccessTimeRounded, CurrencyRuble } from '@mui/icons-material';
import { Typography } from '@mui/material';
import React from 'react';

export const SpaceXLaunchCard = ({
  name,
  tag,
  date,
  details,
  price,
}: SpaceXLaunchCardProps) => (
  <Card>
    <StyledRow mb={8} gap={8}>
      <Typography variant="h3" fontWeight="bold">
        {name}
      </Typography>
      {tag && <Chip label={tag} />}
    </StyledRow>
    <Typography mb={3}>{details || 'Описание не задано'}</Typography>
    <StyledRow gap={24}>
      {price && (
        <StyledRow gap={8}>
          <CurrencyRuble fontSize="small" sx={{ color: '#B0B0B0' }} />
          <Typography variant="h3">{price.toLocaleString('ru-Ru')}</Typography>
        </StyledRow>
      )}
      {date && (
        <StyledRow gap={8}>
          <AccessTimeRounded fontSize="small" sx={{ color: '#B0B0B0' }} />
          <Typography variant="h3">
            {new Date(date).toLocaleDateString('ru-RU')}
          </Typography>
        </StyledRow>
      )}
    </StyledRow>
  </Card>
);
