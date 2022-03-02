import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import theme from '../../style/theme';
import { Sizes } from '../../style/ThemeType';

import BaseElement from '../../common/BaseElement';

export type BaseButtonProps = {
	type?: 'prime' | 'sub' | 'cancel';
	size?: Sizes;
	isDisabled?: boolean;
};

export type ButtonProps = {
	children: ReactNode;
} & BaseButtonProps;

const BaseButton = styled(BaseElement)<BaseButtonProps>`
	white-space: nowrap;
	width: ${({ theme: { sizes }, size }) => sizes[size as Sizes].width};
	height: ${({ theme: { sizes }, size }) => sizes[size as Sizes].height};
	cursor: pointer;
	border-radius: 20px;
	border: none;

	${({ size }) =>
		size === 'large' &&
		`
		font-weight: bold;

	`}

	${({ size }) =>
		size === 'tiny' &&
		`
		font-size: 12px;

	`}

	${({ theme: { colors }, type }) =>
		type === 'prime' &&
		`
		color: ${colors.white};
		background-color: ${colors.purple30};

	`}

	${({ theme: { colors }, type }) =>
		type === 'sub' &&
		`
		color: ${colors.purple30};
		background-color: ${colors.purpleGrey10};

	`}

	${({ theme: { colors }, type }) =>
		type === 'cancel' &&
		`
		color: ${colors.grey50};
		background-color: ${colors.blueGrey20};

	`}

	${({ theme: { colors }, isDisabled }) =>
		isDisabled &&
		`
		color: ${colors.darkPurple10};
		background-color: ${colors.purple10};

	`}
`;

BaseButton.defaultProps = { as: 'button' };

function Button({ children, size, type, isDisabled }: ButtonProps) {
	return (
		<ThemeProvider theme={theme}>
			<BaseButton size={size} type={type} isDisabled={isDisabled}>
				{children}
			</BaseButton>
		</ThemeProvider>
	);
}

Button.defaultProps = { isDisabled: false, size: 'medium', type: 'prime' };

export default Button;
