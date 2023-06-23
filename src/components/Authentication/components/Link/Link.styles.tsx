import { Link, styled } from '@mui/material';

export const TextLink = styled(Link)(() => ({
  textTransform: 'none',
  textDecoration: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
  '&:hover': {
    textDecoration: 'underline',
  },
}));
