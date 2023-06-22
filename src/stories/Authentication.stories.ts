import type { StoryObj, Meta } from '@storybook/react';

import { Authentication } from '@components/Authentication';

const meta = {
  tags: ['autodocs'],
  argTypes: {
    //
  },
  component: Authentication,
  title: 'Example/Authentication',
} satisfies Meta<typeof Authentication>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
