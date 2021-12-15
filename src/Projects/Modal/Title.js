import React from "react";
import { css } from "@emotion/react";
import colors from "../../colors";

var Title = ({ children, ...props }) => (
  <div
    css={css`
      font-weight: 900;
      font-size: 23.17px;
      line-height: 46px;
      margin-bottom: 13px;
      color: ${colors.black};
    `}
  >
    {children}
  </div>
);

export default Title;
