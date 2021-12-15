import React from "react";
import { css } from "@emotion/react";

const Info = ({ children, ...props }) => {
  return (
    <div
      css={css`
        float: left;
        width: 100%;
        display: flex;
        flex-direction: column;

        @media screen and (min-width: 991px) {
          width: 50%;
          padding: 50px;
          padding-left: 100px;
        }
      `}
    >
      {children}
    </div>
  );
};

export default Info;
