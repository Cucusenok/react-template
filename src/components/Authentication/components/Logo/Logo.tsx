import { AvatarProps } from '@mui/material';
import React from 'react';

import { AvatarLogo } from '.';

export const Logo = (props: AvatarProps) => {
  const { children, variant } = props;
  return <AvatarLogo variant={variant}>{children}</AvatarLogo>;
};
