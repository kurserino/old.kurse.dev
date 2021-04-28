import React from "react";
import { css, jsx } from "@emotion/react";

const Title = ({ children, isSmall, ...props }) => {
  return (
    <div
      css={css`
        font-weight: 900;
        font-size: 20px;
        margin-bottom: 10px;

        ${!isSmall &&
        css`
          margin-top: auto;
        `}

        @media screen and (min-width: 991px) {
          font-size: 27.3694px;
          line-height: 33px;
        }
      `}
    >
      {children}
    </div>
  );
};

export default Title;
