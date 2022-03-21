/* eslint-disable no-console */
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toggle from '.';

export default {
	title: 'caweek-ui/Toggle',
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = () => {
	const handleCheck = (checked?: boolean) => {
		if (checked === undefined) console.log('로딩중');
		else if (checked) {
			console.log('트루!');
		} else {
			console.log('폴스!');
		}
	};

	return <Toggle handleCheck={handleCheck} />;
};

export const toggle = Template.bind({});
