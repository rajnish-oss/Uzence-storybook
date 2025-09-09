// InputField.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import InputField from './inputfield';
import type { InputFieldProps } from './inputfield'; // if you exported the type; if not, remove this line

const meta: Meta<InputFieldProps> = {
  title: 'Components/InputField',
  component: InputField,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<InputFieldProps>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    helperText: 'This is a helper text',
  },
};

export const Invalid: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    invalid: true,
    errorMessage: 'Invalid email address',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    disabled: true,
  },
};

export const PasswordToggle: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
  },
};

export const Clearable: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    clearable: true,
    value: 'Initial text',
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading field',
    placeholder: 'Wait...',
    loading: true,
  },
};

export const DarkTheme: Story = {
  args: {
    label: 'Dark themed input',
    placeholder: 'Enter something',
    theme: 'dark',
  },
};

export const VariantsAndSizes: Story = {
  args: {
    label: 'Custom',
    placeholder: 'Testing variants',
    variant: 'filled',
    size: 'lg',
  },
};
