import type { Meta, StoryFn } from '@storybook/react';
import Button from './Button';
import type { ButtonProps } from './Button.types';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;

const Template: StoryFn<ButtonProps> = (args) => Button;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary Button',
};
