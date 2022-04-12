import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from '.';

export default {
	title: 'caweek-ui/Icon',
	argTypes: {
		icon: {
			options: [
				'arrow-top',
				'arrow-bottom',
				'arrow-right',
				'arrow-left',
				'arrow-next',
				'arrow-prev',
				'check',
				'close',
				'plus',
				'menu',
				'pencil',
				'share',
				'share-square',
				'camera',
				'info',
				'question',
				'search',
				'close-round',
				'heart',
				'alarm',
				'people',
				'message-round',
				'message-square',
				'home',
				'setting',
				'person',
				'viewer',
				'more-thin',
				'more-bold',
				'download',
				'highlight',
				'post',
				'review',
				'alert',
				'arrow-down-filled',
				'arrow-up-filled',
				'arrow-topright',
				'hyphen',
				'new',
			],
			control: { type: 'select' },
		},
		width: {
			control: { type: 'text' },
		},
		height: {
			control: { type: 'text' },
		},
		strokeWidth: {
			control: { type: 'number' },
		},
		stroke: {
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
			],
			control: { type: 'select' },
		},
		fill: {
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
			],
			control: { type: 'select' },
		},
	},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = ({ icon, stroke, fill, width, height, strokeWidth, onClick }) => (
	<Icon
		stroke={stroke}
		fill={fill}
		strokeWidth={strokeWidth}
		width={width}
		height={height}
		onClick={onClick}
		icon={icon}
	/>
);

export const icon = Template.bind({});
icon.args = {
	icon: 'arrow-topright',
	width: '60px',
	height: '60px',
	stroke: 'grey40',
	fill: 'grey90',
	strokeWidth: 2,
};
