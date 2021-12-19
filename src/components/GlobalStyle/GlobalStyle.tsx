import { Global, css } from "@emotion/react";
import React from "react";

const reset = css`
  * {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
      "Noto Sans KR", "Malgun Gothic", sans-serif;
  }
`;

export const GlobalStyle = () => {
  return <Global styles={reset} />;
};
