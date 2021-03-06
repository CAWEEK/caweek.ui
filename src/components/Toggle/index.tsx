import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';

import theme from '../../style/theme';

export type ToggleProps = {
	handleCheck: (isChecked: boolean | undefined) => void;
};

const BaseToggle = styled.input`
	all: unset;
	box-sizing: border-box;
	z-index: 1;
	cursor: pointer;
	::before {
		border-radius: 32px;
		position: absolute;
		background-color: ${({ theme: { colors } }) => colors.grey10};
		content: '';
		padding-left: 3px;
		width: 52px;
		height: 32px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		transition: all 0.2s ease-in-out;
	}
	::after {
		position: relative;
		content: '';
		display: block;
		width: 26px;
		height: 26px;
		top: 3px;
		left: 3px;
		border-radius: 50%;
		background: ${({ theme: { colors } }) => colors.white};
		transition: all 0.2s ease-in-out;
	}

	${({ theme: { colors } }) =>
		`
		&:checked {
			transition: all 0.2s ease-in-out;
			::before {
				background: ${colors.purple30};
			}
			::after {
				left: calc(52px - 26px);
			}
		}
	`}
`;

BaseToggle.defaultProps = { type: 'checkbox' };

function Toggle({ handleCheck }: ToggleProps) {
	const toggleRef = useRef<HTMLInputElement>(null);

	return (
		<ThemeProvider theme={theme}>
			<BaseToggle
				ref={toggleRef}
				onChange={() => {
					handleCheck(toggleRef.current?.checked);
				}}
			/>
		</ThemeProvider>
	);
}

export default Toggle;
