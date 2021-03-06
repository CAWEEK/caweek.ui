import { Theme } from '@emotion/react';

const colors = {
	/* main */
	purple10: '#F6F2FF',
	purple20: '#AB84FF',
	purple30: '#651DFF',
	purple40: '#202020',
	purple50: '#000000',
	darkPurple10: '#DBD2ED',

	/* sub */
	orange: '#EB683F',
	red: '#DF1D1D',
	pink: '#FF628F',
	green: '#34C759',

	/* grey scale */
	white: '#FFFFFF',
	grey10: '#E4E4E5',
	grey20: '#CCCCD0',
	grey30: '#ABABB2',
	grey40: '#8B8B96',
	grey50: '#6F6F7B',
	grey60: '#50515F',
	grey70: '#41424D',
	grey80: '#33333C',
	grey90: '#141414',

	/* background */
	blueGrey10: '#F7F7F7',
	blueGrey20: '#F2F4F8',
	purpleGrey10: '#F7F6F9',

	/* label */
	backgroundPink: '#FFE6F5',
	backgroundYellow: '#FFF0BC',
	backgroundBlue: '#E1F1FF',
	textPink: '#FF68C3',
	textYellow: '#EE8F00',
	textBlue: '#3F80FF',

	/* shadow */
	shadow50:
		'0px 4.39853px 5.86471px -4.39853px rgba(24, 39, 75, 0.12), 0px 5.86471px 11.7294px -4.39853px rgba(24, 39, 75, 0.08)',
	shadow100: '0px 5.86471px 31px rgba(214, 228, 249, 0.12), 0px 13.1956px 64.5118px rgba(161, 181, 209, 0.14)',
	shadow200:
		'0px 5.86471px 13.1956px -4.39853px rgba(80, 103, 136, 0.12), 0px 8.79706px 30.7897px -2.93235px rgba(80, 103, 136, 0.12)',
	shadow300:
		'0px 5.86471px 20.5265px -4.39853px rgba(80, 103, 136, 0.12), 0px 13.1956px 64.5118px -2.93235px rgba(80, 103, 136, 0.14)',

	/* etc */
	transparent: 'transparent',
};

const fontFamily = {
	default:
		'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo","Noto Sans KR", "Malgun Gothic", sans-serif',
};

const sizes = {
	large: {
		width: `280px`,
		height: `56px`,
	},
	medium: {
		width: '230px',
		height: '56px',
	},
	small: {
		width: '160px',
		height: '40px',
	},
	tiny: {
		width: '96px',
		height: '36px',
	},
};

const fontSizes = {
	headline4: '40px',
	headline3: '36px',
	headline2: '32px',
	headline1: '24px',
	subhead4: '20px',
	subhead3: '16px',
	subhead2: '14px',
	subhead1: '12px',
	body3: '16px',
	body2: '14px',
	body1: '12px',
};

const lineHeights = {
	headline4: '52px',
	headline3: '46px',
	headline2: '42px',
	headline1: '34px',
	subhead4: '30px',
	subhead3: '22px',
	subhead2: '20px',
	subhead1: '18px',
	body3: '24px',
	body2: '22px',
	body1: '18px',
};

const fontWeights = {
	headline4: '700',
	headline3: '700',
	headline2: '700',
	headline1: '700',
	subhead4: '700',
	subhead3: '700',
	subhead2: '700',
	subhead1: '700',
	body3: '400',
	body2: '400',
	body1: '400',
};

const breakPoints = {
	xs: '0px',
	sm: '600px',
	md: '960px',
	lg: '1280px',
	xl: '1920px',
};

const theme: Theme = {
	colors,
	sizes,
	fontFamily,
	fontSizes,
	fontWeights,
	lineHeights,
	breakPoints,
};

export default theme;
