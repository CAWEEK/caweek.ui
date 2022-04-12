import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';

import { Colors } from '../../style';
import Typo from '../Typo';
import Icon from '../Icon';
import theme from '../../style/theme';

type Option = {
	value: string;
	color: Colors;
};

type DropDownProps = {
	placeholder?: string;
	optionList: Option[];
	onFocus: (menu: string) => void;
};

const SelectedOption = styled.div`
	width: 280px;
	height: 48px;
	border-radius: 12px;
	background-color: ${({ theme: { colors } }) => colors.blueGrey10};
	position: relative;
	display: flex;
	align-items: center;
	padding: 0 16px;
	box-sizing: border-box;
	cursor: pointer;
`;

const ArrowWrapper = styled.div`
	position: absolute;
	right: 12px;
	cursor: pointer;
	box-sizing: border-box;
`;

const OptionList = styled.ul`
	position: absolute;
	list-style: none;
	width: 280px;
	max-height: 184px;
	box-sizing: border-box;
	padding: 0 12px;
	border-radius: 12px;
	background-color: ${({ theme: { colors } }) => colors.blueGrey10};
	top: calc(48px + 8px);
	overflow: scroll;
`;

const OptionBox = styled.li`
	height: 32px;
	box-sizing: border-box;
	margin: 8px 0;
	padding: 0 4px;
	cursor: pointer;
	display: flex;
	align-items: center;

	&:hover {
		background-color: ${({ theme: { colors } }) => colors.blueGrey20};
	}
`;

function DropDown({ placeholder, optionList, onFocus }: DropDownProps) {
	const [drop, setDrop] = useState<boolean>(false);
	const [choice, setChoice] = useState<string>();

	const handleOptionClick = (data: string) => {
		setChoice(data);
		setDrop(false);
		onFocus(data);
	};

	return (
		<ThemeProvider theme={theme}>
			<SelectedOption onClick={() => setDrop(!drop)}>
				<Typo color="grey70" font="subhead2">
					{choice || placeholder}
				</Typo>
				<ArrowWrapper>
					<Icon icon="arrow-bottom" width="24" height="24" stroke="grey70" strokeWidth={1} />
				</ArrowWrapper>
			</SelectedOption>
			{drop && (
				<OptionList>
					{optionList.map((option) => (
						<OptionBox
							key={option.value + option.color}
							onClick={(e) => {
								e.stopPropagation();
								handleOptionClick(option.value);
							}}
						>
							<Typo color={option.color} font="subhead2">
								{option.value}
							</Typo>
						</OptionBox>
					))}
				</OptionList>
			)}
		</ThemeProvider>
	);
}

DropDown.defaultProps = {
	placeholder: '선택해주세요.',
};

export default DropDown;
