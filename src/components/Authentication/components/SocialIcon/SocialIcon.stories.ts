import type { Meta, StoryObj } from '@storybook/react';

import { SocialIcon } from '.';

const meta = {
  tags: ['autodocs'],
  component: SocialIcon,
  title: 'Authentication/SocialIcon',
  argTypes: {
    //
  },
} satisfies Meta<typeof SocialIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Socil icon',
    onClick: () => alert('Click on the link'),
  },
};
