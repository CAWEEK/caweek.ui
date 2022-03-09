import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toggle from '.';

export default {
	title: 'caweek-ui/Toggle',
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = () => {
	const [isChecked, setIsChecked] = useState<boolean>(false);

	const handleCheck = (checked: boolean) => {
		console.log(checked);
	};

	return <Toggle isChecked={isChecked} setIsChecked={setIsChecked} handleCheck={handleCheck} />;
};

export const toggle = Template.bind({});
