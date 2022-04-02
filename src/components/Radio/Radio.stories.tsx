import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Radio from '.';

export default {
	title: 'caweek-ui/Radio',
	argTypes: {
		margin: { control: { type: 'number' } },
	},
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = ({ margin, optionList }) => {
	const [checkedOption, setCheckedOption] = useState<string>('');
	const handleCheck = (data: string) => {
		setCheckedOption(data);
	};
	return <Radio margin={margin} optionList={optionList} checkedOption={checkedOption} handleCheck={handleCheck} />;
};

export const dropDwon = Template.bind({});
dropDwon.args = {
	optionList: ['OPTION1', 'OPTION2', 'OPTION3', 'OPTION4', 'OPTION5'],
	margin: 5,
};
