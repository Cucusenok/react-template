import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { FieldPath } from 'react-hook-form/dist/types';

import { CheckBoxProps } from '.';

export const CheckBox = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>(
  props: CheckBoxProps<TFieldValues, TName>
) => {
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
