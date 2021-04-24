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
        padding: 5px 10px;
        margin-right: 0;

        @media screen and (min-width: 991px) {
          margin-right: 8px;
          border-radius: ${config.borderRadius}px;
        }

        @media screen and (max-width: 991px) {
          border-bottom: none;
        }
      `}
    >
      {children}
    </div>
  );
};

export default Position;
