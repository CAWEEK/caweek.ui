import React from "react";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";
import BaseElement from "@common/BaseElement";

export interface ButtonProps {
  label: string;
}

const BaseButton = withTheme(styled(BaseElement)`
  white-space: nowrap;
  border: ${({ theme: { colors } }) => `1px solid ${colors.grey90}`};
  cursor: pointer;
  border-radius: 4px;
`);

BaseButton.defaultProps = { as: "button" };

const Button = (props: ButtonProps) => {
  return <BaseButton color="purple10">{props.label}</BaseButton>;
};

export default Button;
