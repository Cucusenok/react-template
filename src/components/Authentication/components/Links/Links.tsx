import { BoxProps } from '@mui/material';
import React from 'react';

import { LinksBox } from '.';

export const Links = (props: BoxProps) => {
  const { children } = props;
  return <LinksBox>{children}</LinksBox>;
};
