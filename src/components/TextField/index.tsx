import React, { ChangeEventHandler } from 'react';

import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';

import { theme } from '../../style';

type TextFieldProps = {
	value?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	placeholder?: string;
};

const BaseTextField = styled.input`
	width: 280px;
	height: 48px;
	border-radius: 12px;
	background-color: ${({ theme: { colors } }) => colors.blueGrey10};
	box-sizing: border-box;
	border: none;
	padding: 0 16px;
	display: flex;
	align-items: center;

	font-size: ${({ theme: { fontSizes } }) => fontSizes.subhead2};
	font-weight: ${({ theme: { fontWeights } }) => fontWeights.subhead2};
	color: ${({ theme: { colors } }) => colors.grey20};

	::placeholder {
		color: ${({ theme: { colors } }) => colors.grey20};
	}

	:focus {
		color: ${({ theme: { colors } }) => colors.grey70};
		background-color: ${({ theme: { colors } }) => colors.blueGrey10};
		outline: none;
	}
`;

function TextField({ value, onChange, placeholder }: TextFieldProps) {
	return (
		<ThemeProvider theme={theme}>
			<BaseTextField value={value} onChange={onChange} placeholder={placeholder} />
		</ThemeProvider>
	);
}

TextField.defaultProps = {
	value: undefined,
	onChange: undefined,
	placeholder: undefined,
};

export default TextField;
