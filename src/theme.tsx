import { createTheme } from '@mui/material';

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
});
