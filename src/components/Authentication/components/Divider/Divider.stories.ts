import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from '.';

const meta = {
  tags: ['autodocs'],
  component: Divider,
  title: 'Authentication/Divider',
  argTypes: {
    /*
        backgroundColor: { control: 'color' },
*/
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DividerText: Story = {
  args: {
    text: 'Devider text',
  },
};
