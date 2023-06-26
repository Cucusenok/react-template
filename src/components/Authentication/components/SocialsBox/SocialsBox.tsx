import { GoogleIcon, LinkeddInIcon, TwitterIcon } from '@components/icons';
import React from 'react';

import { SocialIcon } from '..';
import { SocialsWrapper } from './SocialsBox.styles';

export const SocialsBox = () => (
  <SocialsWrapper>
    <SocialIcon>
      <GoogleIcon />
    </SocialIcon>
    <SocialIcon>
      <LinkeddInIcon />
    </SocialIcon>
    <SocialIcon>
      <TwitterIcon />
    </SocialIcon>
  </SocialsWrapper>
);
