import React from "react";
import { css } from "@emotion/react";

const Text = ({ children, ...props }) => {
  return (
    <div
      css={css`
        font-weight: normal;
        font-size: 18px;
        margin-bottom: 15px;

        @media screen and (min-width: 991px) {
          font-size: 21px;
          line-height: 25px;
          margin-bottom: 25px;
        }
      `}
    >
      {children}
    </div>
  );
};

export default Text;
