import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';

import theme from '../../style/theme';
import BaseElement from '../../common/BaseElement';

type ColoumnProps = {
	size?: number;
	justify?: 'center' | 'flex-end' | 'space-between' | 'flex-start';
};

type RowProps = {
	justify?: 'center' | 'flex-end' | 'space-between' | 'flex-start';
	align?: 'center' | 'flex-end' | 'space-between' | 'flex-start';
};

type BaseContainerProps = {
	direction?: 'row' | 'column';
	align?: 'center' | 'flex-end' | 'space-between' | 'flex-start';
	cover?: boolean;
};

type ContainerProps = {
	children: ReactNode;
} & BaseContainerProps;

export const Column = styled(BaseElement)<ColoumnProps>`
	width: auto;
	height: 100%;
	display: flex;
	flex-direction: column;

	${({ justify }) =>
		justify &&
		`
      justify-content: ${justify};
  `}

	${({ size }) =>
		size &&
		`
      width: calc(
        ((100% - 30px * (12-1)) / 12) * ${size} + (30px * ${size - 1})
      );
  `};
`;

Column.defaultProps = { as: 'div' };

export const Row = styled(BaseElement)<RowProps>`
	display: flex;
	flex-direction: row;
	width: 100%;

	${({ justify }) =>
		justify &&
		`
    justify-content: ${justify};
  `}

	${({ align }) =>
		align &&
		`
    align-items: ${align};
  `}

	${Column} ~ ${Column} {
		margin-left: 30px;
	}
`;

Row.defaultProps = { as: 'div' };

const BaseContainer = styled(BaseElement)<BaseContainerProps>`
	width: 1200px;
	margin: 0 auto;
	display: flex;
	flex-direction: ${({ direction }) => direction};

	${({ align }) =>
		align &&
		`
    align-items: ${align};
  `}

	${({ cover }) =>
		cover &&
		`
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  `}
`;

BaseContainer.defaultProps = { as: 'section' };

function Container({ children, direction, align, cover }: ContainerProps) {
	return (
		<ThemeProvider theme={theme}>
			<BaseContainer direction={direction} align={align} cover={cover}>
				{children}
			</BaseContainer>
		</ThemeProvider>
	);
}
Container.defaultProps = { direction: 'column', align: 'center', cover: false };

export default Container;
