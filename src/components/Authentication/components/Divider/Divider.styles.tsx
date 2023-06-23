import { Box, Divider, Typography, styled } from '@mui/material';
import { grey } from '@mui/material/colors';

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

export const DividerTextBox = styled(Box)(() => ({
  left: 0,
  right: 0,
  top: '-10px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '0.9rem',
  position: 'absolute',
}));

export const Text = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  fontWeight: 400,
  color: grey[500],
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  backgroundColor: theme.palette.common.white,
}));
