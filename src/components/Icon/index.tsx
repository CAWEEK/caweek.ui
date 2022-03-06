import React, { MouseEventHandler } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';

import { Colors } from '../../style/ThemeType';
import theme from '../../style/theme';
import Icons from '../../asset/icons.svg';

export type SvgProps = {
	width?: string;
	height?: string;
	onClick?: MouseEventHandler<SVGSVGElement>;
};

export type UseProps = {
	strokeWidth?: number;
	stroke?: Colors;
	fill?: Colors;
};

export type IconProps = {
	icon:
		| 'arrow-top'
		| 'arrow-bottom'
		| 'arrow-right'
		| 'arrow-left'
		| 'arrow-next'
		| 'arrow-prev'
		| 'check'
		| 'close'
		| 'plus'
		| 'menu'
		| 'pencil'
		| 'share'
		| 'share-square'
		| 'camera'
		| 'info'
		| 'question'
		| 'search'
		| 'close-round'
		| 'heart'
		| 'alarm'
		| 'people'
		| 'message-round'
		| 'message-square'
		| 'home'
		| 'setting'
		| 'person'
		| 'viewer'
		| 'more-thin'
		| 'more-bold'
		| 'download'
		| 'highlight'
		| 'post'
		| 'review'
		| 'alert'
		| 'arrow-down-filled'
		| 'arrow-up-filled'
		| 'arrow-topright'
		| 'hyphen'
		| 'new';
} & SvgProps &
	UseProps;

const Svg = styled.svg<SvgProps>`
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
	box-sizing: content-box;
`;

const Use = styled.use<UseProps>`
	stroke: ${({ theme: { colors }, stroke }) => colors[stroke as Colors]};
	fill: ${({ theme: { colors }, fill }) => colors[fill as Colors]};
	stroke-width: ${({ strokeWidth }) => strokeWidth};
`;

function Icon({ icon, stroke, fill, width, height, strokeWidth, onClick }: IconProps) {
	return (
		<ThemeProvider theme={theme}>
			<Svg width={width} height={height} onClick={onClick}>
				<Use xlinkHref={`${Icons}#icon-${icon}`} stroke={stroke} fill={fill} strokeWidth={strokeWidth} />
			</Svg>
		</ThemeProvider>
	);
}

Icon.defaultProps = {
	strokeWidth: 1,
	stroke: 'grey50',
	fill: 'grey50',
	width: 24,
	height: 24,
	onClick: null,
};

export default Icon;
