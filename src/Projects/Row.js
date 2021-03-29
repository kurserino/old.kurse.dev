import React, { useState } from "react";
import { css, jsx } from "@emotion/react";
import colors from "../colors";
import config from "../config";

var Row = ({ containerSize, ...props }) => {

  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;

        @media screen and (min-width: 991px) {
          flex-direction: row;
        }
      `}
      {...props}
    >
    </div>
  );
};

export default Row;
