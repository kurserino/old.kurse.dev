import React from "react";
import { css } from "@emotion/react";

const Skill = ({ children, ...props }) => {
  return (
    <div
      css={css`
        float: left;
        margin-right: 18px;
        margin-bottom: 14px;

        ${props.marginTop ? `margin-top: ${props.marginTop}px;` : ""}
        ${props.translateY
          ? `transform: translateY(${props.translateY}px);`
          : ""}
      `}
    >
      {children}
    </div>
  );
};

export default Skill;
