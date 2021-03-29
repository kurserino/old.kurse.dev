import React from "react";
import { jsx, css } from "@emotion/react";

var Icon = ({ children, ...props }) => {
  return (
    <div
      css={css`
        margin-right: 8px;
      `}
    >
      {children}
    </div>
  );
};

export default Icon;
