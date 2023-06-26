import type { Meta, StoryObj } from '@storybook/react';

import { Links } from '.';

const meta = {
  tags: ['autodocs'],
  component: Links,
  title: 'Authentication/Links',
  argTypes: {
    /*
        backgroundColor: { control: 'color' },
*/
  },
} satisfies Meta<typeof Links>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: ['Link 1 ', 'Link 2 ', 'Link 3 '],
  },
};
