import { css, CSSObject } from "@emotion/css";
import { Theme, ThemeColors } from "@emotion/react";
import theme from "@style/theme";
import styled from "@emotion/styled";

type Colors = {
  color?: ThemeColors;
  bg?: ThemeColors;
  hoverColor?: ThemeColors;
  hoverBg?: ThemeColors;
};

const colors = (
  theme: Theme,
  { color, bg, hoverColor, hoverBg }: Colors = {}
) => {
  let styles: CSSObject = {};

  if (color) {
    styles.color = theme.colors[color];
  }

  if (bg) {
    styles.backgroundColor = theme.colors[bg];
  }

  // hover
  if (hoverColor) {
    styles[":hover"] = {
      color: theme.colors[hoverColor],
    };
  }

  if (hoverBg) {
    styles[":hover"] = {
      ...styles[":hover"],
      backgroundColor: theme.colors[hoverBg],
    };
  }
  return css(styles);
};

const baseStyles = (theme: Theme) =>
  css({
    color: theme.colors.grey90,
    fontSize: theme.fontSizes.subhead2,
    fontFamily: theme.fontFamily.default,
    boxSizing: "border-box",
  });

const BaseElement = styled.div(baseStyles(theme), colors(theme));

export default BaseElement;

// Use Case: Generally BaseElement styles are extends by other components, but we can use BaseElement in react like this
// import withTheme from "styled-components";

// const Comopnent = withTheme(({ theme }) => (
//   <BaseElement
//     textAlign="center"
//     spacing={{ m: theme.spacing(2) }}
//     bg={theme.colors.info.main}
//     color={theme.colors.white.main}
//   >
//     Styling with props
//   </BaseElement>
// ));
