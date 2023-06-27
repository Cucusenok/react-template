import { StyledChip } from '@components/Chip/Chip.styles';
import { ChipProps } from '@components/Chip/Chip.types';
import CircleIcon from '@mui/icons-material/Circle';
import React from 'react';

export const Chip = ({ label }: ChipProps) => (
  <StyledChip icon={<CircleIcon />} label={label} />
);
