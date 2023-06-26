import { Box, styled } from '@mui/material';

export const SocialsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  justifyContent: 'center',
  marginTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
}));
