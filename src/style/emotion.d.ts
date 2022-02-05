import "@emotion/react";

declare module "@emotion/react" {
  export type ThemeColors =
    | "purple10"
    | "purple20"
    | "purple30"
    | "purple40"
    | "purple50"
    | "darkPurple10"
    | "orange"
    | "red"
    | "pink"
    | "green"
    | "white"
    | "grey10"
    | "grey20"
    | "grey30"
    | "grey40"
    | "grey50"
    | "grey60"
    | "grey70"
    | "grey80"
    | "grey90"
    | "blueGrey10"
    | "blueGrey20"
    | "purpleGrey10"
    | "shadow50"
    | "shadow100"
    | "shadow200"
    | "shadow300";
  export type ThemeFontFamily = "default";
  export type ThemeFont =
    | "headline1"
    | "headline2"
    | "headline3"
    | "headline4"
    | "subhead4"
    | "subhead3"
    | "subhead2"
    | "subhead1"
    | "body3"
    | "body2"
    | "body1";
  export type ThemeBreakPoint = "xs" | "sm" | "md" | "lg" | "xl";

  export interface Theme {
    colors: {
      [key in ThemeColors]: string;
    };
    fontFamily: {
      [key in ThemeFontFamily]: string;
    };
    fontSizes: {
      [key in ThemeFont]: string;
    };
    fontWeights: {
      [key in ThemeFont]: string;
    };
    lineHeights: {
      [key in ThemeFont]: string;
    };
    breakPoints: {
      [key in ThemeBreakPoint]: string;
    };
  }
}
