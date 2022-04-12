import React from 'react';
import styled from '@emotion/styled';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Container, { Column, Row } from '.';

export default {
	title: 'caweek-ui/Grid',
} as ComponentMeta<typeof Container>;

const ContainerTemplate: ComponentStory<typeof Container> = ({ direction, align, cover }) => {
	const Children = styled.div`
		background-color: #651dff;
		color: #ffffff;
		width: 100%;
		height: 406px;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	`;
	return (
		<Container direction={direction} align={align} cover={cover}>
			<Row>
				<Column size={1}>
					<Children>1</Children>
				</Column>
				<Column size={2}>
					<Children>2</Children>
				</Column>
				<Column size={3}>
					<Children>3</Children>
				</Column>
				<Column size={1}>
					<Children />
				</Column>
				<Column size={1}>
					<Children />
				</Column>
				<Column size={1}>
					<Children />
				</Column>
				<Column size={1}>
					<Children />
				</Column>
				<Column size={1}>
					<Children />
				</Column>
				<Column size={1}>
					<Children />
				</Column>
			</Row>
		</Container>
	);
};

export const container = ContainerTemplate.bind({});
container.args = {
	direction: 'column',
	align: 'center',
	cover: false,
};
