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
    name: 'Название',
    tag: 'Хештэг',
    details:
      'Какая то информация по теме или подробное описание этого объявления',
    price: 12000,
    date: '2032-10-15',
  },
};
