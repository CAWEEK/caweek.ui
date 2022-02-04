import { css, CSSObject } from "@emotion/css";
import { Theme } from "@emotion/react";
import theme from "@components/theme";
import styled from "@emotion/styled";

type Colors = {
  color?: string;
  bg?: string;
  hoverColor?: string;
  hoverBg?: string;
};

const colors = ({ color, bg, hoverColor, hoverBg }: Colors) => {
  let styles: CSSObject = {};

  if (color) {
    styles.color = color;
  }

  if (bg) {
    styles.backgroundColor = bg;
  }

  // hover
  if (hoverColor) {
    styles[":hover"] = {
      color: hoverColor,
    };
  }

  if (hoverBg) {
    styles[":hover"] = {
      ...styles[":hover"],
      backgroundColor: hoverBg,
    };
  }
  return css(styles);
};

const baseStyles = (theme: Theme) =>
  css({
    color: theme.colors.grey90,
    fontSize: theme.fontSizes.subhead2,
    fontFamily: theme.fontSizes.subhead2,
    boxSizing: "border-box",
  });

const BaseElement = styled.div(baseStyles(theme), colors);

export default BaseElement;
