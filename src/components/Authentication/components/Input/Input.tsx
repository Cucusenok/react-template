import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

import { InputProps } from '.';

export const Input = (props: InputProps) => {
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

  const required = rules?.required
    ? { required: true, message: rules.required.message }
    : undefined;
  const minLength = rules?.minLength
    ? { minLength: rules.minLength.value, message: rules.minLength.message }
    : undefined;
  const pattern = rules?.pattern
    ? { pattern: rules.pattern.value, message: rules.pattern.message }
    : undefined;
  const rule = { ...required, ...minLength, ...pattern };

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
      rules={{
        ...rule,
        validate: password
          ? (value) => value === password || 'Passwords do not match'
          : undefined,
      }}
      control={control}
      name={name}
    />
  );
};
