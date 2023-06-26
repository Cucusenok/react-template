import { LinkProps } from '@mui/material';
import React from 'react';

import { TextLink } from '.';

export const Link = (props: LinkProps) => {
  return <TextLink {...props}>{props.children}</TextLink>;
};
