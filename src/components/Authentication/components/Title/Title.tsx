import { TypographyProps } from '@mui/material';
import React from 'react';

import { TitleTypography } from '.';

export const Title = (props: TypographyProps) => {
  const { children } = props;
  return <TitleTypography>{children}</TitleTypography>;
};
