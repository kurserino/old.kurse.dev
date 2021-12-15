import React from "react";
import { css } from "@emotion/react";
import config from "../config";
import colors from "../colors";

const Company = ({ children, ...props }) => {
  return (
    <div
      css={css`
        background: ${colors.lightGray};
        border: 1px solid #dcdcdc;
        box-sizing: border-box;
        border-radius: 0 0 ${config.borderRadius}px ${config.borderRadius}px;
        font-size: 16px;
        font-weight: 600;
        padding: 5px 10px;

        @media screen and (min-width: 991px) {
          border-radius: ${config.borderRadius}px;
        }
      `}
    >
      {children}
    </div>
  );
};

export default Company;
