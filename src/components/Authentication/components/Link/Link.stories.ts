import type { Meta, StoryObj } from '@storybook/react';

import { Link } from '.';

const meta = {
  tags: ['autodocs'],
  component: Link,
  title: 'Authentication/Link',
  argTypes: {
    /*
        backgroundColor: { control: 'color' },
*/
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Link to resurse',
    color: 'primary',
    onClick: () => alert(`Переход по ссылке`),
  },
};

export const Secondary: Story = {
  args: {
    children: 'Link to resurse',
    color: 'secondary',
    onClick: () => alert(`Переход по ссылке`),
  },
};
