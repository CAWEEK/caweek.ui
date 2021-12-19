import React from "react";
import styled from "@emotion/styled";
import { GlobalStyle } from "../GlobalStyle/GlobalStyle";

export interface ButtonProps {
  label: string;
}

const StyledButton = styled.button`
  width: 100px;
`;

const Button = (props: ButtonProps) => {
  return (
    <>
      <GlobalStyle />
      <StyledButton>{props.label}</StyledButton>
    </>
  );
};

export default Button;
