import { styled } from '@mui/system';

export const Card = styled('div')(({ theme }) => ({
  padding: '20px',
  border: '2px solid #EAEAEA',
  borderRadius: '12px',
  [theme.breakpoints.up('lg')]: {},
}));
