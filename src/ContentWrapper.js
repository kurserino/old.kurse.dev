import React from "react";
import { jsx, css } from "@emotion/react";
import colors from "./colors";
import config from "./config";

var ContentWrapper = ({ ...props }) => {
  var containerSize = { display: "desktop" };
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        padding: 0;

        @media screen and (min-width: 991px) {
          border: 1px solid ${colors.blackRussian};
          background: #fff;
          border-radius: ${config[containerSize.display].borderRadius}px;
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
