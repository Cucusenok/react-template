import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

import { CheckBoxProps } from '.';

export const CheckBox = (props: CheckBoxProps) => {
  const { label, name, size, required, control, disabled } = props;

  return (
    <Controller
      render={({ field: { value, onChange } }) => (
        <FormControlLabel
          control={
            <Checkbox
              onChange={onChange}
              color="primary"
              size={size}
              checked={value}
              disabled={disabled}
            />
          }
          label={label}
        />
      )}
      rules={{ required }}
      control={control}
      name={name}
    />
  );
};
