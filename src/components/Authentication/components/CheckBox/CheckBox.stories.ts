import type { Meta, StoryObj } from '@storybook/react';

import { CheckBox } from '.';

const meta = {
  tags: ['autodocs'],
  component: CheckBox,
  title: 'Authentication/CheckBox',
  argTypes: {
    //
  },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    name: 'disabledCheckBox',
    size: 'small',
    color: 'inherit',
    disabled: true,
  },
};

export const Primary: Story = {
  args: {
    label: 'Primary CheckBox',
    name: 'primaryCheckBox',
    size: 'small',
    color: 'primary',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary CheckBox',
    name: 'secondaryCheckBox',
    size: 'small',
    color: 'secondary',
    disabled: false,
  },
};
