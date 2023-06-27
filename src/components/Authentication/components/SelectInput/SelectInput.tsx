import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

import { SelectProps } from '.';

export const SelectInput = (props: SelectProps) => {
  const {
    label,
    name,
    size,
    color,
    fullWidth,
    errorMessage,
    rules,
    control,
    selectItems,
  } = props;
  return (
    <Controller
      render={({ field: { value, onChange } }) => (
        <FormControl
          sx={{ mt: 2, mb: 1, minWidth: '100%' }}
          variant="outlined"
          size={size}
        >
          <InputLabel>Account type</InputLabel>
          <Select
            onChange={(event: SelectChangeEvent) =>
              onChange(event.target.value)
            }
            labelId="accountType"
            label={label}
            color={color}
            size={size}
            value={value as string | undefined}
            fullWidth={fullWidth}
          >
            {selectItems.map((item) => (
              <MenuItem value={item.title} key={item.id}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
          {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
        </FormControl>
      )}
      name={name}
      control={control}
      rules={rules}
    />
  );
};
