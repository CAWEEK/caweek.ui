import React, { MouseEventHandler } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider, css } from '@emotion/react';

import theme from '../../style/theme';
import logoSrc from '../../asset/caweek-logo.svg';

export type BaseLogoProps = {
	width?: number;
	handleClick?: MouseEventHandler<HTMLElement>;
};

export type LogoProps = BaseLogoProps;

const BaseLogo = styled.img<BaseLogoProps>`
	width: ${({ width }) => width}px;
	object-fit: cover;

	${({ handleClick }) =>
		handleClick &&
		css`
			cursor: pointer;
		`}
`;

BaseLogo.defaultProps = { alt: 'caweek logo' };

function CaweekLogo({ width, handleClick }: LogoProps) {
	return (
		<ThemeProvider theme={theme}>
			<BaseLogo width={width} src={logoSrc as unknown as string} onClick={handleClick} />
		</ThemeProvider>
	);
}

CaweekLogo.defaultProps = { width: 106, handleClick: undefined };

export default CaweekLogo;
