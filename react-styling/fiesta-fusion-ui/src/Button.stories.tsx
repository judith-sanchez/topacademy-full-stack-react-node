import React from 'react';
import {Meta, Story} from '@storybook/react';
import Button, {ButtonProps} from './Button';

export default {
	title: 'Components/Button',
	component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => (
	<Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {
	variation: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	variation: 'secondary',
};

export const Accent = Template.bind({});
Accent.args = {
	variation: 'accent',
};

export const Background = Template.bind({});
Background.args = {
	variation: 'background',
};

export const Highlight = Template.bind({});
Highlight.args = {
	variation: 'highlight',
};

// npm run storybook
