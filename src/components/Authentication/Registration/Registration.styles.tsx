import { Typography, Divider, Button, Avatar, Card, Box } from '@mui/material';
import { styled } from '@mui/system';

export const CardStyled = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
  },
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  margin: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    margin: theme.spacing(2),
  },
}));

export const AvatarStyled = styled(Avatar)(({ theme }) => ({
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

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  margin: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    margin: theme.spacing(2),
  },
}));

export const LinksBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  flexDirection: 'column',
}));

export const LinkStyled = styled(Button)(() => ({
  textTransform: 'none',
}));

export const DividerBox = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  position: 'relative',
}));

export const DividerStyled = styled(Divider)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

export const SocialText = styled(Typography)(({ theme }) => ({
  left: 0,
  right: 0,
  top: '-10px',
  margin: 'auto',
  width: '110px',
  display: 'flex',
  fontSize: '0.9rem',
  position: 'absolute',
  color: theme.palette.text,
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  backgroundColor:
    theme.palette.mode === 'light'
      ? theme.palette.common.white
      : theme.palette.grey[900],
}));

export const SocialBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  justifyContent: 'center',
  marginTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
}));

export const IconAvatar = styled(Avatar)(() => ({
  backgroundColor: 'transparent',
}));

export const TariffCard = styled(Card)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

export const TariffCardHeader = styled(Typography)(({ theme }) => ({
  display: 'flex',
  fontWeight: 700,
  fontSize: '2rem',
  minHeight: '60px',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
}));

export const TariffCardText = styled(Typography)(({ theme }) => ({
  display: 'flex',
  fontWeight: 700,
  fontSize: '2rem',
  minHeight: '60px',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
}));
