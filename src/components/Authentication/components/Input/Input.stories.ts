import { emailRules } from '@components/Authentication/helpers/validationRules';
import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '.';

const meta = {
  tags: ['autodocs'],
  component: Input,
  title: 'Authentication/Input',
  argTypes: {
    /*
        backgroundColor: { control: 'color' },
*/
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    name: 'disabledCheckBox',
    size: 'small',
    rules: emailRules,
    disabled: true,
  },
};

export const Primary: Story = {
  args: {
    label: 'Primary color checkbox',
    name: 'primariColorCheckBox',
    size: 'small',
    rules: emailRules,
    disabled: false,
  },
};

export const Small: Story = {
  args: {
    label: 'Error message',
    name: 'errorMessageCheckBox',
    size: 'small',
    errorMessage: 'Error message',
    rules: emailRules,
    disabled: false,
  },
};

export const Error: Story = {
  args: {
    label: 'Small color checkbox',
    name: 'smallColorCheckBox',
    size: 'small',
    rules: emailRules,
    disabled: false,
  },
};
