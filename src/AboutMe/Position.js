import React from "react";
import { css, jsx } from "@emotion/react";
import config from "../config";

const Position = ({ children, ...props }) => {
  return (
    <div
      css={css`
        background: #f8f8f8;
        border: 1px solid #dcdcdc;
        box-sizing: border-box;
        border-radius: ${config.borderRadius}px;
        padding: 5px 10px;
        margin-right: 8px;
      `}
    >
      {children}
    </div>
  );
};

export default Position;
