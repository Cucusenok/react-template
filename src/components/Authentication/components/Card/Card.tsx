import { BoxProps } from '@mui/material';
import React from 'react';

import { CardBox } from '.';

export const Card = (props: BoxProps) => {
  const { children } = props;
  return <CardBox>{children}</CardBox>;
};
