import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextField from '.';

export default {
	title: 'caweek-ui/TextField',
	argTypes: {
		placeholder: {
			control: { type: 'text' },
		},
	},
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = ({ placeholder }) => {
	const [text, setText] = useState<string>();
	return <TextField value={text} placeholder={placeholder} onChange={(e) => setText(e.target.value)} />;
};

export const textField = Template.bind({});
