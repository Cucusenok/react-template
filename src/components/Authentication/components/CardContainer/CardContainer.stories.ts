import type { Meta, StoryObj } from '@storybook/react';

import { CardContainer } from '.';

const meta = {
  tags: ['autodocs'],
  component: CardContainer,
  title: 'Authentication/CardContainer',
  argTypes: {
    /*
        backgroundColor: { control: 'color' },
*/
  },
} satisfies Meta<typeof CardContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'CardContainer content',
  },
};
