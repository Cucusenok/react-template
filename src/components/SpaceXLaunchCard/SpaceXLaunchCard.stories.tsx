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
  args: {
    mission_name: 'Название',
    rocket: { rocket_name: 'Хештэг' },
    launch_date_local: '2032-10-15',
    details: 'Какая-то информация или подробное описание',
    price: 12000,
  },
};
