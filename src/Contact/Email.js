import React, { useState } from "react";
import { css } from "@emotion/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tooltip } from "react-tippy";
import { tooltipParams } from "../config.js";

const Email = ({ children, ...props }) => {
  const [copied, setCopied] = useState(false);
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        background-color: #f8f8f8;
        border: 1px solid #dcdcdc;
        padding: 20px;
        font-weight: 300;
        font-size: 18px;
        border-radius: 5px;
        margin-bottom: 20px;

        @media screen and (min-width: 991px) {
          margin-bottom: auto;
          max-width: 375px;
          font-size: 24.8341px;
          line-height: 30px;
        }
      `}
    >
      {children}
      <Tooltip
        title="Copied!"
        {...tooltipParams}
        trigger="manual"
        open={copied}
      >
        <CopyToClipboard
          text={children}
          onCopy={() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          css={css`
            cursor: pointer;
          `}
        >
          <svg
            width="19"
            height="22"
            viewBox="0 0 19 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 20H6V6H17V20ZM17 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V6C19 5.46957 18.7893 4.96086 18.4142 4.58579C18.0391 4.21071 17.5304 4 17 4ZM14 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V16H2V2H14V0Z"
              fill="black"
            />
          </svg>
        </CopyToClipboard>
      </Tooltip>
    </div>
  );
};

export default Email;
