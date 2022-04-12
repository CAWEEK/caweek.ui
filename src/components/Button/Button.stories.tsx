import React from 'react';
import styled from '@emotion/styled';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '.';

export default {
	title: 'caweek-ui/Button',
	argTypes: {
		children: {
			control: { type: 'text' },
		},
		size: {
			options: ['tiny', 'small', 'medium', 'large'],
			control: { type: 'radio' },
		},
		type: {
			options: ['prime', 'sub', 'cancel'],
			control: { type: 'radio' },
		},
		isDisabled: {
			control: { type: 'boolean' },
		},
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, size, type, isDisabled }) => {
	const clickAction = action('clicked');
	return (
		<Button size={size} type={type} isDisabled={isDisabled} onClick={clickAction}>
			{children}
		</Button>
	);
};

const ListTemplate = () => {
	const clickAction = action('clicked');

	const ButtonWrapper = styled.div`
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		& > div + div {
			margin-top: 2rem;
		}
	`;

	const InnerWrapper = styled.div`
		display: flex;
		align-items: center;
		padding: 20px;
		border-radius: 10px;
		border: 1px solid #e4e4e5;
		box-shadow: 0px 5.86471px 13.1956px -4.39853px rgba(80, 103, 136, 0.12),
			0px 8.79706px 30.7897px -2.93235px rgba(80, 103, 136, 0.12);
		& > button {
			margin-right: 2rem;
		}
	`;

	const Title = styled.div`
		font-size: 20px;
		font-weight: bold;
		width: fit-content;
		box-sizing: border-box;
		padding: 0 20px;
	`;

	return (
		<ButtonWrapper>
			<Title className="description">PRIME</Title>
			<InnerWrapper>
				<Button size="large" type="prime" onClick={clickAction}>
					PRIME
				</Button>
				<Button size="medium" type="prime" onClick={clickAction}>
					PRIME
				</Button>
				<Button size="small" type="prime" onClick={clickAction}>
					PRIME
				</Button>
				<Button size="tiny" type="prime" onClick={clickAction}>
					PRIME
				</Button>
			</InnerWrapper>
			<Title className="description">SUB</Title>
			<InnerWrapper>
				<Button size="large" type="sub" onClick={clickAction}>
					SUB
				</Button>
				<Button size="medium" type="sub" onClick={clickAction}>
					SUB
				</Button>
				<Button size="small" type="sub" onClick={clickAction}>
					SUB
				</Button>
				<Button size="tiny" type="sub" onClick={clickAction}>
					SUB
				</Button>
			</InnerWrapper>
			<Title className="description">CANCEL</Title>
			<InnerWrapper>
				<Button size="large" type="cancel" onClick={clickAction}>
					CANCEL
				</Button>
				<Button size="medium" type="cancel" onClick={clickAction}>
					CANCEL
				</Button>
				<Button size="small" type="cancel" onClick={clickAction}>
					CANCEL
				</Button>
				<Button size="tiny" type="cancel" onClick={clickAction}>
					CANCEL
				</Button>
			</InnerWrapper>
			<Title className="description">DISABLED</Title>
			<InnerWrapper>
				<Button size="large" isDisabled>
					DISABLED
				</Button>
				<Button size="medium" isDisabled>
					DISABLED
				</Button>
				<Button size="small" isDisabled>
					DISABLED
				</Button>
				<Button size="tiny" isDisabled>
					DISABLED
				</Button>
			</InnerWrapper>
		</ButtonWrapper>
	);
};

export const button = Template.bind({});
button.args = {
	children: 'BUTTON',
	size: 'medium',
	type: 'prime',
	isDisabled: false,
};

export const buttonList = ListTemplate.bind({});
