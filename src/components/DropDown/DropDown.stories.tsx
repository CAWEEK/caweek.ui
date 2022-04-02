import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import DropDown from '.';

export default {
	title: 'caweek-ui/DropDown',
	argTypes: {
		optionList: { table: { expanded: true } },
		placeholder: { control: { type: 'text' } },
	},
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = ({ optionList, placeholder, onFocus }) => (
	<DropDown placeholder={placeholder} optionList={optionList} onFocus={onFocus} />
);

export const dropDwon = Template.bind({});
dropDwon.args = {
	optionList: [
		{ value: 'TEXT1', color: 'grey70' },
		{ value: 'TEXT2', color: 'grey70' },
		{ value: 'TEXT3', color: 'grey70' },
		{ value: 'TEXT4', color: 'grey70' },
		{ value: 'TEXT5', color: 'grey70' },
		{ value: 'TEXT6', color: 'grey70' },
	],
};
