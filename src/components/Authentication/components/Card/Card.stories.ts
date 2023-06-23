import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '.';

const meta = {
  tags: ['autodocs'],
  component: Card,
  title: 'Authentication/Card',
  argTypes: {
    /*
        backgroundColor: { control: 'color' },
*/
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Card content',
  },
};
