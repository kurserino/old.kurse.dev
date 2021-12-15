import React from "react";
import { css } from "@emotion/react";
import colors from "../colors";

const Title = ({ children, ...props }) => {
  return (
    <div
      css={css`
        font-weight: 900;
        font-size: 21.1808px;
        line-height: 25px;
        color: ${colors.blackRussian};
        margin-bottom: 16px;
      `}
    >
      {children}
    </div>
  );
};
export default Title;
