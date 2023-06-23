import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta = {
  tags: ['autodocs'],
  component: Button,
  title: 'Authentication/Button',
  argTypes: {
    /*
        backgroundColor: { control: 'color' },
*/
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    fullWidth: false,
    color: 'primary',
    children: 'Authentication',
    variant: 'contained',
  },
};

export const Secondary: Story = {
  args: {
    fullWidth: true,
    color: 'secondary',
    children: 'Authentication',
    variant: 'contained',
  },
};
