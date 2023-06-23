import {
  Card,
  RowWithMediumSpacing,
  RowWithSmallSpacing,
  TopRow,
} from '@components/SpaceXLaunchCard/SpaceXLaunchCard.styles';
import { AccessTimeRounded, CurrencyRuble } from '@mui/icons-material';
// import { useGetSpaceXLaunchesQuery } from "@gql/graphql";
import { Typography } from '@mui/material';
import React from 'react';

export const SpaceXLaunchCard = () => {
  // const { data, error, loading } = useGetSpaceXLaunchesQuery();

  const name = 'Название';
  return (
    <Card>
      <TopRow>
        <Typography variant="h3">{name}</Typography>
        <span>Хэштег</span>
      </TopRow>
      <Typography>
        Какая то информация по теме или подробное описание этого объявления
      </Typography>
      <RowWithMediumSpacing>
        <RowWithSmallSpacing>
          <CurrencyRuble fontSize="small" /> Цена
        </RowWithSmallSpacing>
        <RowWithSmallSpacing>
          <AccessTimeRounded fontSize="small" /> Цена
        </RowWithSmallSpacing>
      </RowWithMediumSpacing>
    </Card>
  );
};
