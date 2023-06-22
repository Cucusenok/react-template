import { MainButton } from '@components/MainButton/MainButton';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  tags: ['autodocs'],
  component: MainButton,
  title: 'Example/Button',
  argTypes: {
    /*
        backgroundColor: { control: 'color' },
*/
  },
} satisfies Meta<typeof MainButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    fullWidth: false,
    color: 'primary',
    text: 'Hello World!',
  },
};

export const Secondary: Story = {
  args: {
    fullWidth: true,
    color: 'inherit',
    text: 'Hello World!',
  },
};
