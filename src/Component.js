import React, { Component } from "react";
import { css } from "@emotion/react";

const Component = ({ children, ...props }) => {
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      {children}
    </div>
  );
};

export default Component;
