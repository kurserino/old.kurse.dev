import React from "react";
import { jsx, css } from "@emotion/react";
import colors from "./colors";
import config from "./config";

var ContentWrapper = ({ containerSize, ...props }) => {
  var containerSize = {display: "desktop"}
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        background: #fff;
        border: 1px solid ${colors.blackRussian};
        border-radius: ${config[containerSize.display].borderRadius}px;
        padding: 15px;

        @media screen and (min-width: 991px) {
          padding: 20px;
        }
      `}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default ContentWrapper;
