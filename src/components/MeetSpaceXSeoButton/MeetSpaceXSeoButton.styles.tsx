import { styled } from '@mui/system';

export const Button = styled('button')(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 'bold',
  padding: '15px 20px',
  whiteSpace: 'nowrap',
  borderRadius: '10px',
  [theme.breakpoints.up('lg')]: {
    display: 'block',
  },
}));

export const CEOName = styled('span')(({ theme }) => ({
  color: 'green',
  [theme.breakpoints.up('lg')]: {},
}));

export const ErrorField = styled('span')(({ theme }) => ({
  color: 'red',
  background: 'red',
  [theme.breakpoints.up('lg')]: {},
}));
