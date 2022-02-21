import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from '@emotion/react';
import BaseElement from '@common/BaseElement';

export interface ButtonProps {
	label: string;
}

const BaseButton = withTheme(styled(BaseElement)`
	white-space: nowrap;
	color: ${({ theme: { colors } }) => colors.white};
	width: ${({ theme: { sizes } }) => sizes.medium.width};
	height: ${({ theme: { sizes } }) => sizes.medium.height};
	cursor: pointer;
	border-radius: 20px;
	border: none;
	background-color: ${({ theme: { colors } }) => colors.purple30};
`);

BaseButton.defaultProps = { as: 'button' };

function Button({ label }: ButtonProps) {
	return <BaseButton>{label}</BaseButton>;
}

export default Button;
