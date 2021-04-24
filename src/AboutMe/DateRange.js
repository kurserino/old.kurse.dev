import React from "react";
import { css, jsx } from "@emotion/react";
import config from "../config";

const DateRange = ({ from, to, ...props }) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        background: #f8f8f8;
        border: 1px solid #dcdcdc;
        box-sizing: border-box;
        padding: 5px 10px;
        font-weight: 900;
        font-size: 15px;
        border-radius: ${config.borderRadius}px ${config.borderRadius}px 0 0;
        margin-right: 0;

        @media screen and (min-width: 991px) {
          border-radius: ${config.borderRadius}px;
          margin-right: 8px;
        }

        @media screen and (max-width: 991px) {
          border-bottom: none;
        }
      `}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        css={css`
          margin-right: 9px;
        `}
      >
        <path
          d="M14.2222 14.4H1.77778V5.6H14.2222V14.4ZM11.5556 0V1.6H4.44444V0H2.66667V1.6H1.77778C0.791111 1.6 0 2.312 0 3.2V14.4C0 14.8243 0.187301 15.2313 0.520699 15.5314C0.854097 15.8314 1.30628 16 1.77778 16H14.2222C14.6937 16 15.1459 15.8314 15.4793 15.5314C15.8127 15.2313 16 14.8243 16 14.4V3.2C16 2.312 15.2 1.6 14.2222 1.6H13.3333V0H11.5556ZM12.4444 8.8H8V12.8H12.4444V8.8Z"
          fill="#333333"
        />
      </svg>

      {from}
      <svg
        width="16"
        height="8"
        viewBox="0 0 16 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        css={css`
          margin: 0 6px;
        `}
      >
        <path
          d="M3.72501 7.45001L0 3.72501L3.72501 0L4.68872 0.963717L2.61776 3.04152H12.419L10.348 0.963717L11.3117 0L15.0367 3.72501L11.3117 7.45001L10.348 6.48629L12.419 4.40849H2.61776L4.68872 6.48629L3.72501 7.45001Z"
          fill="#BEBEBE"
        />
      </svg>

      {to}
    </div>
  );
};

export default DateRange;
