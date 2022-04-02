import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckBox from '.';

export default {
	title: 'caweek-ui/CheckBox',
	argTypes: {
		label: { control: { type: 'text' } },
	},
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = ({ label }) => {
	const [isChekced, setIsChecked] = useState<boolean>(false);

	const handleCheck = () => {
		setIsChecked(!isChekced);
	};
	return <CheckBox isChecked={isChekced} handleCheck={handleCheck} label={label} />;
};

export const checkBox = Template.bind({});
checkBox.args = {
	label: '아무 말이나 써 보겠습니다.',
};
