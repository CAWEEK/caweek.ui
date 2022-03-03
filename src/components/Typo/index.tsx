import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';

import theme from '../../style/theme';
import { Colors, Fonts } from '../../style/ThemeType';
import BaseElement from '../../common/BaseElement';

export type BaseTypoProps = {
	color?: Colors;
	font?: Fonts;
	isClickable?: boolean;
};

export type TypoProps = {
	children: ReactNode;
} & BaseTypoProps;

const BaseTypo = styled(BaseElement)<BaseTypoProps>`
	font-style: normal;
	letter-spacing: -0.6px;

	${({ theme: { fontSizes, lineHeights, fontWeights, colors }, font, color }) => `
    font-weight: ${fontWeights[font as Fonts]};
    font-size: ${fontSizes[font as Fonts]};
    line-height: ${lineHeights[font as Fonts]};
    color: ${colors[color as Colors]};
  `}

	${({ isClickable }) =>
		isClickable &&
		`
    cursor: pointer;
  `}
`;

BaseTypo.defaultProps = { as: 'p' };

function Typo({ children, color, font, isClickable }: TypoProps) {
	return (
		<ThemeProvider theme={theme}>
			<BaseTypo color={color} font={font} isClickable={isClickable}>
				{children}
			</BaseTypo>
		</ThemeProvider>
	);
}

Typo.defaultProps = { color: 'grey90', font: 'body3', isClickable: false };

export default Typo;
