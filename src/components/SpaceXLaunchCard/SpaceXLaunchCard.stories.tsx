import type { Meta, StoryObj } from '@storybook/react';

import { SpaceXLaunchCard } from '.';

const meta = {
  tags: ['autodocs'],
  component: SpaceXLaunchCard,
  title: 'SpaceXLaunchCard',
} satisfies Meta<typeof SpaceXLaunchCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SpaceXLaunchCardDefault: Story = {
  args: {},
};
