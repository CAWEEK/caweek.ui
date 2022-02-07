import { css, CSSObject } from '@emotion/css';
import { ThemeColors } from '@emotion/react';
import theme from '@style/theme';
import styled from '@emotion/styled';

type Colors = {
	color?: ThemeColors;
	bg?: ThemeColors;
	hoverColor?: ThemeColors;
	hoverBg?: ThemeColors;
};

const colors = ({ color, bg, hoverColor, hoverBg }: Colors) => {
	const styles: CSSObject = {};

	if (color) {
		styles.color = theme.colors[color];
	}

	if (bg) {
		styles.backgroundColor = theme.colors[bg];
	}

	// hover
	if (hoverColor) {
		styles[':hover'] = {
			color: theme.colors[hoverColor],
		};
	}

	if (hoverBg) {
		styles[':hover'] = {
			...styles[':hover'],
			backgroundColor: theme.colors[hoverBg],
		};
	}
	return css(styles);
};

const baseStyles = () =>
	css({
		color: theme.colors.grey90,
		fontSize: theme.fontSizes.subhead2,
		fontFamily: theme.fontFamily.default,
		boxSizing: 'border-box',
	});

const BaseElement = styled.div(baseStyles, colors);

export default BaseElement;
