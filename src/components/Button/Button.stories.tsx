import React from 'react';
import styled from '@emotion/styled';

import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
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

	return (
		<Button size={size} type={type} isDisabled={isDisabled}>
			{label}
		</Button>
	);
};

export const ButtonList = () => (
	<ButtonWrapper>
		<div className="description">Tiny</div>
		<InnerWrapper>
			<Button size="tiny" type="prime">
				PRIME
			</Button>
			<Button size="tiny" type="sub">
				SUB
			</Button>
			<Button size="tiny" type="cancel">
				CANCEL
			</Button>
			<Button size="tiny" isDisabled>
				DISABLED
			</Button>
		</InnerWrapper>
		<div className="description">Small</div>
		<InnerWrapper>
			<Button size="small" type="prime">
				PRIME
			</Button>
			<Button size="small" type="sub">
				SUB
			</Button>
			<Button size="small" type="cancel">
				CANCEL
			</Button>
			<Button size="small" isDisabled>
				DISABLED
			</Button>
		</InnerWrapper>
		<div className="description">Medium</div>
		<InnerWrapper>
			<Button size="medium" type="prime">
				PRIME
			</Button>
			<Button size="medium" type="sub">
				SUB
			</Button>
			<Button size="medium" type="cancel">
				CANCEL
			</Button>
			<Button size="medium" isDisabled>
				DISABLED
			</Button>
		</InnerWrapper>
		<div className="description">Large</div>
		<InnerWrapper>
			<Button size="large" type="prime">
				PRIME
			</Button>
			<Button size="large" type="sub">
				SUB
			</Button>
			<Button size="large" type="cancel">
				CANCEL
			</Button>
			<Button size="large" isDisabled>
				DISABLED
			</Button>
		</InnerWrapper>
	</ButtonWrapper>
);
