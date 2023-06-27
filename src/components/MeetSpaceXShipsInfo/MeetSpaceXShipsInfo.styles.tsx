import { Card, CardMedia, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';

export const ShipCard = styled(Card)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {},
}));

export const ShipCardMedia = styled(CardMedia)(({ theme }) => ({
  height: '180px',
  [theme.breakpoints.up('lg')]: {
    height: '140px',
  },
}));

export const ShipTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('lg')]: {},
}));

export const ShipText = styled(Typography)({
  color: '#000',
  textAlign: 'center',
});

export const ErrorField = styled(Box)(({ theme }) => ({
  color: 'red',
  background: 'red',
  [theme.breakpoints.up('lg')]: {},
}));
