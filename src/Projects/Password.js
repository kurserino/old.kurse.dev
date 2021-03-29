import React, { useState } from "react";
import { css, jsx } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";
import colors from "../colors";
import config from "../config";
import Star from "./Password/Star";
import Box from "./Password/Box";
import Logo from "./Password/Logo";

var Password = ({ containerSize, ...props }) => {
  var containerSize = useSelector((state) => state.container);
  var width = containerSize.width ? containerSize.width : 0;
  var display = containerSize.display;
  var margin = config[display].margin;
  var gridHeight = config[display].grid.height;
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        background-color: ${colors.deepPink};
        overflow: hidden;
        position: relative;
        margin: ${margin}px;
        border-radius: ${config[display].borderRadius}px;
        width: 100%;
        height: ${gridHeight * containerSize.width}px;

        @media screen and (min-width: 991px) {
          width: ${width * 0.5 - margin}px;
          height: ${gridHeight * (width * 0.6)}px;

          &:hover {
            cursor: pointer;
          }
        }
      `}
      {...props}
    >
      <Box />
      <Star />
      <Logo />
    </div>
  );
};

export default Password;
