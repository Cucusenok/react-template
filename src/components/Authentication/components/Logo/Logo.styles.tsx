import { Avatar, styled } from '@mui/material';

export const AvatarLogo = styled(Avatar)(({ theme }) => ({
  width: '60px',
  height: '60px',
  fontSize: '1.5rem',
  margin: theme.spacing(1),
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.up('md')]: {
    width: '80px',
    height: '80px',
    fontSize: '2rem',
  },
}));
