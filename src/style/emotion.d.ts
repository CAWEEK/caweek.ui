/* eslint-disable @typescript-eslint/no-empty-interface */
import '@emotion/react';
import { CaweekTheme } from './ThemeType';

declare module '@emotion/react' {
	export interface Theme extends CaweekTheme {}
}
