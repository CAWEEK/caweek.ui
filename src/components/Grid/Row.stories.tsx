import React from 'react';
import styled from '@emotion/styled';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Row } from '.';

export default {
	title: 'caweek-ui/Grid',
	argTypes: {
		children: {
			control: { type: 'text' },
		},
		align: {
			options: ['center', 'flex-end', 'space-between', 'flex-start'],
			control: { type: 'radio' },
		},
		justify: {
			options: ['center', 'flex-end', 'space-between', 'flex-start'],
			control: { type: 'radio' },
		},
	},
} as ComponentMeta<typeof Row>;

const Template: ComponentStory<typeof Row> = ({ children, align, justify }) => {
	const Children = styled.div`
		background-color: #651dff;
		width: 100%;
		height: 406px;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 0 10px;
	`;

	const Box = styled.div`
		background-color: #ab84ff;
		width: 100px;
		height: 100px;
		border-radius: 10px;
		margin: 0 10px;
	`;
	return (
		<Children>
			<Row align={align} justify={justify} style={{ backgroundColor: '#F6F2FF', borderRadius: '10px' }}>
				{children} <Box />
			</Row>
		</Children>
	);
};

export const row = Template.bind({});
row.args = {
	children: '가볍게 시작하는 나만의 회고, Caweek',
	align: 'center',
	justify: 'center',
};
