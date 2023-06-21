import { styled } from '@mui/system';

export const Button = styled('button')(({ theme }) => ({
  width: '100px',
  height: '100px',
  borderRadius: '10px',
  [theme.breakpoints.up('lg')]: {
    display: 'block',
  },
}));
