import React from "react";
import { css } from "@emotion/react";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

const Scrollbar = ({ children, ...props }) => {
  return (
    <PerfectScrollbar
      css={css`
        height: 100vh;
      `}
      {...props}
    >
      {children}
    </PerfectScrollbar>
  );
};

export default Scrollbar;
