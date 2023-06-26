import { ButtonProps } from '@mui/material';
import React from 'react';

import { FormButton } from '.';

export const Button = (props: ButtonProps) => {
  const { children, disabled, sx, color, onClick, variant } = props;
  return (
    <FormButton
      disabled={disabled}
      fullWidth
      sx={sx}
      color={color}
      onClick={onClick}
      variant={variant}
    >
      {children}
    </FormButton>
  );
};
