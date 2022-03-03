import React from 'react';
import styled from '@emotion/styled';

import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '.';

export default {
	title: 'caweek-ui | Button',
	component: Button,
	decorators: [withKnobs],
};

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
	& > button {
		margin-right: 2rem;
	}
`;

export const button = () => {
	const label = text('children', 'BUTTON');
	const size = select('size', ['tiny', 'small', 'medium', 'large'], 'medium');
	const type = select('type', ['prime', 'sub', 'cancel'], 'prime');
	const isDisabled = boolean('isDisabled', false);
	const clickAction = action('clicked');

	return (
		<Button size={size} type={type} isDisabled={isDisabled} onClick={clickAction}>
			{label}
		</Button>
	);
};

export const ButtonList = () => {
	const clickAction = action('clicked');
	return (
		<ButtonWrapper>
			<div className="description">Tiny</div>
			<InnerWrapper>
				<Button size="tiny" type="prime" onClick={clickAction}>
					PRIME
				</Button>
				<Button size="tiny" type="sub" onClick={clickAction}>
					SUB
				</Button>
				<Button size="tiny" type="cancel" onClick={clickAction}>
					CANCEL
				</Button>
				<Button size="tiny" isDisabled onClick={clickAction}>
					DISABLED
				</Button>
			</InnerWrapper>
			<div className="description">Small</div>
			<InnerWrapper>
				<Button size="small" type="prime" onClick={clickAction}>
					PRIME
				</Button>
				<Button size="small" type="sub" onClick={clickAction}>
					SUB
				</Button>
				<Button size="small" type="cancel" onClick={clickAction}>
					CANCEL
				</Button>
				<Button size="small" isDisabled onClick={clickAction}>
					DISABLED
				</Button>
			</InnerWrapper>
			<div className="description">Medium</div>
			<InnerWrapper>
				<Button size="medium" type="prime" onClick={clickAction}>
					PRIME
				</Button>
				<Button size="medium" type="sub" onClick={clickAction}>
					SUB
				</Button>
				<Button size="medium" type="cancel" onClick={clickAction}>
					CANCEL
				</Button>
				<Button size="medium" isDisabled onClick={clickAction}>
					DISABLED
				</Button>
			</InnerWrapper>
			<div className="description">Large</div>
			<InnerWrapper>
				<Button size="large" type="prime" onClick={clickAction}>
					PRIME
				</Button>
				<Button size="large" type="sub" onClick={clickAction}>
					SUB
				</Button>
				<Button size="large" type="cancel" onClick={clickAction}>
					CANCEL
				</Button>
				<Button size="large" isDisabled onClick={clickAction}>
					DISABLED
				</Button>
			</InnerWrapper>
		</ButtonWrapper>
	);
};
