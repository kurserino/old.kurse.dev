import React from "react";
import { css } from "@emotion/react";
import colors from "../../colors";

var Text = ({ children, ...props }) => (
  <div
    css={css`
      font-weight: normal;
      font-size: 19.29px;
      line-height: 30px;
      color: ${colors.black};
    `}
  >
    {children}
  </div>
);

export default Text;
