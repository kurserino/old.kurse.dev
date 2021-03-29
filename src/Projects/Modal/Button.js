import React from "react";
import { useSelector } from "react-redux";
import { css, jsx } from "@emotion/react";
import colors from "../../colors";
import config from "../../config";

var Button = ({ children, isWhite, ...props }) => {
  var containerSize = useSelector((state) => state.container);
  var display = containerSize.display;
  var borderRadius = config[display].borderRadius;

  return (
    <a
      css={css`
        background: ${isWhite ? colors.white : colors.black};
        font-weight: normal;
        font-size: 16px;
        color: ${isWhite ? colors.black : colors.white};
        display: flex;
        align-items: center;
        justify-content: center;
        height: 36px;
        border-radius: ${borderRadius}px;
        padding: 0 22px;
        text-decoration: none;
        border: 1px solid ${colors.black};

        @media screen and (min-width: 991px) {
          margin-right: 10px;
        }
      `}
      {...props}
    >
      {children}
    </a>
  );
};

export default Button;
