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
  fontSize: '16px',
  fontWeight: 'bold',
  padding: '15px 20px',
  whiteSpace: 'nowrap',
  borderRadius: '10px',
  color: 'green',
  [theme.breakpoints.up('lg')]: {},
}));
