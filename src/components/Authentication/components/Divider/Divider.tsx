import React from 'react';

import { DividerProps } from '.';
import {
  DividerBox,
  DividerStyled,
  DividerTextBox,
  Text,
} from './Divider.styles';

export const Divider = (props: DividerProps) => {
  const { text } = props;
  return (
    <DividerBox>
      <DividerStyled />
      <DividerTextBox>
        <Text variant="body2">{text}</Text>
      </DividerTextBox>
    </DividerBox>
  );
};
