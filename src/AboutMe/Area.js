import React from "react";
import { css } from "@emotion/react";

const Area = ({ children, isSkill, ...props }) => {
  return (
    <div
      css={css`
        float: left;
        width: 100%;
        margin-bottom: 30px;

        ${isSkill &&
        css`
          margin-bottom: 16px;
        `}
      `}
    >
      {children}
    </div>
  );
};

export default Area;
