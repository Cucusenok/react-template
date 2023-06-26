import { Box, styled } from '@mui/material';

export const LinksBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  flexDirection: 'column',
  marginTop: theme.spacing(2),
}));
