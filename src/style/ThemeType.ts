export type Colors =
	| 'purple10'
	| 'purple20'
	| 'purple30'
	| 'purple40'
	| 'purple50'
	| 'darkPurple10'
	| 'orange'
	| 'red'
	| 'pink'
	| 'green'
	| 'white'
	| 'grey10'
	| 'grey20'
	| 'grey30'
	| 'grey40'
	| 'grey50'
	| 'grey60'
	| 'grey70'
	| 'grey80'
	| 'grey90'
	| 'blueGrey10'
	| 'blueGrey20'
	| 'purpleGrey10'
	| 'shadow50'
	| 'shadow100'
	| 'shadow200'
	| 'shadow300'
	| 'transparent';
export type Sizes = 'large' | 'medium' | 'small' | 'tiny';
export type Size = {
	width: string;
	height: string;
};
export type FontFamiles = 'default';
export type Fonts =
	| 'headline1'
	| 'headline2'
	| 'headline3'
	| 'headline4'
	| 'subhead4'
	| 'subhead3'
	| 'subhead2'
	| 'subhead1'
	| 'body3'
	| 'body2'
	| 'body1';
export type BreakPoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface CaweekTheme {
	colors: {
		[key in Colors]: string;
	};
	sizes: {
		[key in Sizes]: Size;
	};
	fontFamily: {
		[key in FontFamiles]: string;
	};
	fontSizes: {
		[key in Fonts]: string;
	};
	fontWeights: {
		[key in Fonts]: string;
	};
	lineHeights: {
		[key in Fonts]: string;
	};
	breakPoints: {
		[key in BreakPoints]: string;
	};
}
