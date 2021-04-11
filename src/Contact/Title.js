import React from "react";
import { css, jsx } from "@emotion/react";

const Title = ({ children, isSmall, ...props }) => {
  return (
    <div
      css={css`
        font-weight: 900;
        font-size: 27.3694px;
        line-height: 33px;
        ${!isSmall &&
        css`
          margin-top: auto;
        `}
        ${isSmall &&
        css`
          font-size: 21px;
          line-height: 25px;
          margin-bottom: 14px;
          /* padding-left: 10px; */
        `}
      `}
    >
      {children}
    </div>
  );
};

export default Title;
