import React from 'react';

import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

import { Typo } from 'components';
import { theme } from 'style';

type OptionListProps = {
	margin?: number;
};

type RadioProps = {
	optionList: string[];
	checkedOption: string;
	handleCheck: (data: string) => void;
} & OptionListProps;

const Option = styled.li`
	display: flex;
	align-items: center;
	height: 24px;
	cursor: pointer;
`;

const OptionList = styled.ul<OptionListProps>`
	list-style: none;
	${Option} ~ ${Option} {
		margin-top: ${({ margin }) => `calc(0.5rem * ${margin})`};
	}
`;

const Input = styled.input`
	width: 20px;
	height: 20px;
	border-radius: 10px;
	margin: 0 8px 0 0;
	box-sizing: border-box;
	background-color: ${({ theme: { colors } }) => colors.blueGrey10};
	border: 1px solid ${({ theme: { colors } }) => colors.grey20};

	&:checked {
		border: 1px solid ${({ theme: { colors } }) => colors.purple30};
		background: ${({ theme: { colors } }) => `radial-gradient(${colors.purple30} 50%, ${colors.white} 50%)`};
	}
`;

function Radio({ optionList, checkedOption, handleCheck, margin }: RadioProps) {
	return (
		<ThemeProvider theme={theme}>
			<OptionList margin={margin}>
				{optionList.map((option) => (
					<Option onClick={() => handleCheck(option)}>
						<Input type="radio" checked={option === checkedOption} />
						<Typo font="body2" color="grey90">
							{option}
						</Typo>
					</Option>
				))}
			</OptionList>
		</ThemeProvider>
	);
}

Radio.defaultProps = {
	margin: 5,
};

export default Radio;
