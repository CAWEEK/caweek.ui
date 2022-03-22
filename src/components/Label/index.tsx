import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { css, ThemeProvider } from '@emotion/react';

import BaseElement from 'common/BaseElement';
import { Colors } from 'style';
import { Typo } from 'components';
import theme from '../../style/theme';

export type BaseLabelProps = {
	size?: 'small' | 'large';
	backgroundColor?: Colors;
};

export type LabelProps = {
	children?: ReactNode;
	fontColor?: Colors;
} & BaseLabelProps;

const BaseLabel = styled(BaseElement)<BaseLabelProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: fit-content;

	${({ theme: { colors }, backgroundColor }) => css`
		background-color: ${colors[backgroundColor as Colors]};
	`}

	${({ size }) => {
		switch (size) {
			case 'small':
				return css`
					height: 28px;
					padding: 4px 16px;
					border-radius: 12px;
				`;
			case 'large':
				return css`
					padding: 8px 20px;
					height: 38px;
					border-radius: 16px;
				`;
			default:
				return css`
					height: 28px;
					padding: 4px 16px;
					border-radius: 12px;
				`;
		}
	}}
`;

BaseLabel.defaultProps = { as: 'div' };

function Label({ size, backgroundColor, fontColor, children }: LabelProps) {
	const getFont = () => {
		switch (size) {
			case 'large':
				return 'subhead3';
			case 'small':
				return 'subhead2';
			default:
				return 'subhead2';
		}
	};
	return (
		<ThemeProvider theme={theme}>
			<BaseLabel size={size} backgroundColor={backgroundColor}>
				<Typo color={fontColor} font={getFont()}>
					{children}
				</Typo>
			</BaseLabel>
		</ThemeProvider>
	);
}

Label.defaultProps = { size: 'small', fontColor: 'textPink', backgroundColor: 'backgroundPink', children: undefined };
export default Label;
