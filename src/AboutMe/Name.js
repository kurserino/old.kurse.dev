import React from "react";
import { css } from "@emotion/react";
import colors from "../colors";

const ConfirmedIcon = ({ ...props }) => {
  return (
    <svg
      css={css`
        margin-left: 7px;
      `}
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 9.49546L17.7818 6.97181L18.0909 3.63115L14.8091 2.88677L13.0909 0L10 1.32537L6.90909 0L5.19091 2.88677L1.90909 3.62207L2.21818 6.96273L0 9.49546L2.21818 12.0191L1.90909 15.3688L5.19091 16.1132L6.90909 19L10 17.6656L13.0909 18.9909L14.8091 16.1042L18.0909 15.3598L17.7818 12.0191L20 9.49546ZM8.18182 14.0344L4.54545 10.4032L5.82727 9.12327L8.18182 11.4654L14.1727 5.48304L15.4545 6.7721L8.18182 14.0344Z"
        fill="#818181"
      />
    </svg>
  );
};

const Name = ({ children, ...props }) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        font-style: normal;
        font-weight: 900;
        font-size: 27.0776px;
        line-height: 32px;
        color: ${colors.blackRussian};
      `}
    >
      {children}
      <ConfirmedIcon />
    </div>
  );
};
export default Name;
