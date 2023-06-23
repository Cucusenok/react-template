import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from '.';

const meta = {
  tags: ['autodocs'],
  component: Logo,
  title: 'Authentication/Logo',
  argTypes: {
    //
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Logo',
    variant: 'circular',
  },
};

export const Square: Story = {
  args: {
    children: 'Logo',
    variant: 'rounded',
  },
};

export const Rounded: Story = {
  args: {
    children: 'Logo',
    variant: 'square',
  },
};
