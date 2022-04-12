/* eslint-disable no-console */
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Label from '.';

export default {
	title: 'caweek-ui/Label',
	argTypes: {
		children: {
			control: { type: 'text' },
		},
		size: {
			options: ['small', 'large'],
			control: { type: 'radio' },
		},
		fontColor: {
			options: [
				'purple10',
				'purple20',
				'purple30',
				'purple40',
				'purple50',
				'darkPurple10',
				'orange',
				'red',
				'pink',
				'green',
				'white',
				'grey10',
				'grey20',
				'grey30',
				'grey40',
				'grey50',
				'grey60',
				'grey70',
				'grey80',
				'grey90',
				'blueGrey10',
				'blueGrey20',
				'purpleGrey10',
				'backgroundPink',
				'backgroundYellow',
				'backgroundBlue',
				'textPink',
				'textYellow',
				'textBlue',
			],
			control: { type: 'select' },
		},
		backgroundColor: {
			options: [
				'purple10',
				'purple20',
				'purple30',
				'purple40',
				'purple50',
				'darkPurple10',
				'orange',
				'red',
				'pink',
				'green',
				'white',
				'grey10',
				'grey20',
				'grey30',
				'grey40',
				'grey50',
				'grey60',
				'grey70',
				'grey80',
				'grey90',
				'blueGrey10',
				'blueGrey20',
				'purpleGrey10',
				'backgroundPink',
				'backgroundYellow',
				'backgroundBlue',
				'textPink',
				'textYellow',
				'textBlue',
			],
			control: { type: 'select' },
		},
	},
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = ({ size, fontColor, backgroundColor, children }) => (
	<Label size={size} fontColor={fontColor} backgroundColor={backgroundColor}>
		{children}
	</Label>
);

export const label = Template.bind({});
label.args = {
	children: '오늘 할 일',
};
