import React from 'react';

import { ThemeProvider, css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from 'style';
import Typo from 'components/Typo';

type BaseCheckBoxProps = {
	isChecked?: boolean;
};

type CheckBoxProps = {
	handleCheck?: () => void;
	label?: string;
} & BaseCheckBoxProps;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`;

const CheckIcon = styled.svg`
	fill: none;
	stroke: white;
	stroke-width: 2px;
	stroke-linecap: round;
	stroke-linejoin: round;
`;

const BaseCheckBox = styled.div<BaseCheckBoxProps>`
	width: 20px;
	height: 20px;
	border-radius: 10px;
	margin-right: 8px;
	border: 1px solid ${({ theme: { colors } }) => colors.grey20};
	background-color: ${({ theme: { colors } }) => colors.blueGrey10};
	box-sizing: border-box;

	& > svg {
		display: none;
	}

	${({ theme: { colors }, isChecked }) =>
		isChecked &&
		css`
			background-color: ${colors.purple30};
			border: none;
			& > svg {
				display: block;
			}
		`}
`;

function CheckBox({ isChecked, handleCheck, label }: CheckBoxProps) {
	return (
		<ThemeProvider theme={theme}>
			<Wrapper onClick={handleCheck}>
				<BaseCheckBox isChecked={isChecked}>
					<CheckIcon viewBox="-4 -4 32 32">
						<polyline points="20 6 9 17 4 12" />
					</CheckIcon>
				</BaseCheckBox>
				<Typo font="body2" color="grey90">
					{label}
				</Typo>
			</Wrapper>
		</ThemeProvider>
	);
}

CheckBox.defaultProps = {
	isChecked: undefined,
	handleCheck: undefined,
	label: undefined,
};

export default CheckBox;
