import {
  BottomRow,
  Card,
  RowWithSmallSpacing,
  TopRow,
} from '@components/SpaceXLaunchCard/SpaceXLaunchCard.styles';
import { SpaceXLaunchCardProps } from '@components/SpaceXLaunchCard/SpaceXLaunchCard.types';
import { AccessTimeRounded, CurrencyRuble } from '@mui/icons-material';
// import { useGetSpaceXLaunchesQuery } from "@gql/graphql";
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
    <TopRow>
      <Typography variant="h3" fontWeight="bold">
        {name}
      </Typography>
      <span>{tag}</span>
    </TopRow>
    <Typography mb={3}>{details || 'Описание не задано'}</Typography>
    <BottomRow>
      {price && (
        <RowWithSmallSpacing>
          <CurrencyRuble fontSize="small" sx={{ color: '#B0B0B0' }} />
          <Typography variant="h3">{price.toLocaleString('ru-Ru')}</Typography>
        </RowWithSmallSpacing>
      )}
      {date && (
        <RowWithSmallSpacing>
          <AccessTimeRounded fontSize="small" sx={{ color: '#B0B0B0' }} />
          <Typography variant="h3">
            {new Date(date).toLocaleDateString('ru-RU')}
          </Typography>
        </RowWithSmallSpacing>
      )}
    </BottomRow>
  </Card>
);
