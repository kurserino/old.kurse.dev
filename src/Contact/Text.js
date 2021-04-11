import React from "react";
import { css, jsx } from "@emotion/react";

const Text = ({ children, ...props }) => {
  return (
    <div
      css={css`
        font-weight: normal;
        font-size: 21px;
        line-height: 25px;
        margin-bottom: 25px;
      `}
    >
      {children}
    </div>
  );
};

export default Text;
