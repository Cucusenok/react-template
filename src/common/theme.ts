import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
  },
  components: {
    MuiSelect: {
      defaultProps: {
        size: 'small',
        variant: 'outlined',
      },
    },
    MuiButton: {
      defaultProps: {
        color: 'primary',
        variant: 'contained',
      },
    },
    MuiInputBase: {
      styleOverrides: {
        formControl: {
          marginRight: '1rem',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
        margin: 'normal',
        variant: 'outlined',
      },
    },
  },
  typography: {
    fontFamily: 'Inter',
    body1: {
      color: '#4D4D4D',
      fontSize: '16px',
    },
    h3: {
      color: '#4D4D4D',
      fontSize: '18px',
    },
  },
});
