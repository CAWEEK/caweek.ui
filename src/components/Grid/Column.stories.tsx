import React from 'react';
import styled from '@emotion/styled';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Column } from '.';

export default {
	title: 'caweek-ui/Grid',
	argTypes: {
		children: {
			control: { type: 'text' },
		},
		size: {
			options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
			control: { type: 'select' },
		},
		justify: {
			options: ['center', 'flex-end', 'space-between', 'flex-start'],
			control: { type: 'radio' },
		},
	},
} as ComponentMeta<typeof Column>;

const Template: ComponentStory<typeof Column> = ({ children, size, justify }) => {
	const Children = styled.div`
		background-color: #651dff;
		width: 100%;
		height: 406px;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 10px 0;
	`;
	return (
		<Children>
			<Column size={size} justify={justify} style={{ backgroundColor: '#F6F2FF', borderRadius: '10px' }}>
				{children}
			</Column>
		</Children>
	);
};

export const column = Template.bind({});
column.args = {
	children: '가볍게 시작하는 나만의 회고, Caweek',
	size: undefined,
	justify: 'center',
};
