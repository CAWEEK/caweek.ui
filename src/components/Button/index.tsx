import React from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import theme from '../../style/theme';

import BaseElement from '../../common/BaseElement';

export interface ButtonProps {
	label: string;
}

const BaseButton = styled(BaseElement)`
	white-space: nowrap;
	color: ${({ theme: { colors } }) => colors.white};
	width: ${({ theme: { sizes } }) => sizes.medium.width};
	height: ${({ theme: { sizes } }) => sizes.medium.height};
	cursor: pointer;
	border-radius: 20px;
	border: none;
	background-color: ${({ theme: { colors } }) => colors.purple30};
`;

BaseButton.defaultProps = { as: 'button' };

function Button({ label }: ButtonProps) {
	return (
		<ThemeProvider theme={theme}>
			<BaseButton>{label}</BaseButton>;
		</ThemeProvider>
	);
}

export default Button;
