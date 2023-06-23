import { LinkProps } from '@mui/material';
import React from 'react';

import { TextLink } from '.';

export const Link = (props: LinkProps) => {
  const { children, sx, color, onClick } = props;
  return (
    <TextLink sx={sx} color={color} onClick={onClick}>
      {children}
    </TextLink>
  );
};
