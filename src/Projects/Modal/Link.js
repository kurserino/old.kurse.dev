import React from "react";
import { css } from "@emotion/react";
import colors from "../../colors";

var Link = ({ children, ...props }) => (
  <a
    css={css`
      font-weight: normal;
      font-size: 16px;
      color: ${colors.black};
      background: ${colors.white};
      display: flex;
      align-items: center;
      justify-content: center;
      height: 36px;
      margin: 0 30px;
      text-decoration: none;
    `}
    {...props}
  >
    {children}
  </a>
);

export default Link;
