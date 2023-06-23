import { Card, Typography, styled } from '@mui/material';

export const TariffCard = styled(Card)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

export const TariffCardHeader = styled(Typography)(({ theme }) => ({
  display: 'flex',
  fontWeight: 700,
  fontSize: '2rem',
  minHeight: '60px',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
}));

export const TariffCardText = styled(Typography)(({ theme }) => ({
  display: 'flex',
  fontWeight: 700,
  fontSize: '2rem',
  minHeight: '60px',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
}));
