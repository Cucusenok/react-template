import type { Meta, StoryObj } from '@storybook/react';

import { TariffCardItem } from '.';

const meta = {
  tags: ['autodocs'],
  component: TariffCardItem,
  title: 'Authentication/TariffCardItem',
  argTypes: {
    //
  },
} satisfies Meta<typeof TariffCardItem>;

export default meta;
type Story = StoryObj<typeof meta>;

let clicked: 'text' | 'outlined' | 'contained' = 'outlined';

export const Primary: Story = {
  args: {
    variant: clicked,
    tariff: {
      features: [
        {
          title: 'Feature 1',
          id: 0,
        },
        {
          title: 'Feature 2',
          id: 2,
        },
      ],
      price: '100$',
      id: 0,
    },
    setSelectedTariff: () => (clicked = 'contained'),
  },
};
