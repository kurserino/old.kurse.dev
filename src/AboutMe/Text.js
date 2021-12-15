import React from "react";
import { css } from "@emotion/react";
import colors from "../colors";

const Text = ({ children, ...props }) => {
  return (
    <div
      css={css`
        font-weight: normal;
        font-size: 18.3363px;
        line-height: 24px;
        color: ${colors.blackRussian};
      `}
    >
      {children}
    </div>
  );
};
export default Text;
