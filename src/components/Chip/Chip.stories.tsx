import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from '.';

const meta = {
  tags: ['autodocs'],
  component: Chip,
  title: 'Chip',
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SpaceXLaunchCardDefault: Story = {
  args: {
    label: 'Статус',
  },
};
