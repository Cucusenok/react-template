import { IconButtonProps } from '@mui/material';
import React from 'react';

import { AvatarSocial, ButtonSocial } from '.';

export const SocialIcon = (props: IconButtonProps) => {
  const { children, sx, onClick } = props;
  return (
    <ButtonSocial sx={sx} onClick={onClick}>
      <AvatarSocial>{children}</AvatarSocial>
    </ButtonSocial>
  );
};
