import { TextField } from '@mui/material';
import React from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { FieldPath } from 'react-hook-form/dist/types';

import { InputProps } from '.';

export function Input<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>(props: InputProps<TFieldValues, TName>) {
  const {
    label,
    name,
    size,
    margin,
    type,
    fullWidth,
    errorMessage,
    rules,
    control,
    password,
    disabled,
  } = props;

  return (
    <Controller
      render={({ field: { value, onBlur, onChange } }) => (
        <TextField
          helperText={<span style={{ color: 'red' }}>{errorMessage}</span>}
          label={label}
          onChange={onChange}
          onBlur={onBlur}
          margin={margin}
          size={size}
          type={type}
          value={value}
          fullWidth={fullWidth}
          disabled={disabled}
        />
      )}
      rules={
        password
          ? {
              ...rules,
              validate: (value) =>
                value === password || 'Passwords do not match',
            }
          : { ...rules }
      }
      control={control}
      name={name}
    />
  );
}
