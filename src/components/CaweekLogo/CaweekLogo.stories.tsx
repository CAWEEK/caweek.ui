import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import CaweekLogo from '.';

export default {
	title: 'caweek-ui/CaweekLogo',
	argTypes: {
		width: {
			control: { type: 'number' },
		},
	},
} as ComponentMeta<typeof CaweekLogo>;

const Template: ComponentStory<typeof CaweekLogo> = ({ width, handleClick }) => (
	<CaweekLogo width={width} handleClick={handleClick} />
);

export const caweekLogo = Template.bind({});

caweekLogo.args = { width: 106 };
