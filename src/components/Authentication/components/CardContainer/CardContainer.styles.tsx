import { Box, styled } from '@mui/system';

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  margin: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    margin: theme.spacing(2),
  },
}));
