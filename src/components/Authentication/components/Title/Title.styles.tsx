import { Typography, styled } from '@mui/material';

export const TitleTypography = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    margin: theme.spacing(2),
  },
}));
