import { BoxProps } from '@mui/system';
import React from 'react';

import { Wrapper } from '.';

export const CardContainer = (props: BoxProps) => {
  const { children } = props;
  return <Wrapper>{children}</Wrapper>;
};
