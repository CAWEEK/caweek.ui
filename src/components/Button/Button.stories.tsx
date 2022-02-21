import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
	title: 'caweek-ui/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Regular = Template.bind({});
Regular.args = {
	label: 'Regular',
};

export const ClickMe = Template.bind({});
ClickMe.args = {
	label: 'Click me!',
};
