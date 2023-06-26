import { Card, styled } from '@mui/material';

export const CardBox = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
  },
}));
