import React, { ChangeEventHandler } from 'react';

import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';

import { theme } from '../../style';

type TextFieldProps = {
	value?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	placeholder?: string;
	full?: boolean;
};

const BaseTextField = styled.input<{ full?: boolean }>`
	width: ${({ full }) => (full ? '100%' : '280px')};
	height: ${({ full }) => (full ? '64px' : '48px')};
	border-radius: 12px;
	background-color: ${({ theme: { colors } }) => colors.blueGrey10};
	box-sizing: border-box;
	border: none;
	padding: 0 16px;
	display: flex;
	align-items: center;

	font-size: ${({ theme: { fontSizes }, full }) => (full ? fontSizes.headline1 : fontSizes.subhead2)};
	font-weight: ${({ theme: { fontWeights }, full }) => (full ? fontWeights.headline1 : fontWeights.subhead2)};
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

function TextField({ value, onChange, placeholder, full }: TextFieldProps) {
	return (
		<ThemeProvider theme={theme}>
			<BaseTextField value={value} onChange={onChange} placeholder={placeholder} full={full} />
		</ThemeProvider>
	);
}

TextField.defaultProps = {
	value: undefined,
	onChange: undefined,
	placeholder: undefined,
	full: undefined,
};

export default TextField;
