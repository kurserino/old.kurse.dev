import React, { useState } from "react";
import { css, jsx } from "@emotion/react";
import colors from "../colors";
import config from "../config";
import Logo from "./OctoShop/Logo";
import { useSelector, useDispatch } from "react-redux";
var index = 2;
var row = 1;

var OctoShop = ({ ...props }) => {
  var containerSize = useSelector((state) => state.container);
  var width = containerSize.width;
  var margin = config[containerSize.display].margin;
  var gridHeight = config[containerSize.display].grid.height;
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: ${colors.dodgerBlue};
        overflow: hidden;
        position: relative;
        margin: ${margin}px;
        border-radius: ${config[containerSize.display].borderRadius}px;
        width: 100%;
        height: ${gridHeight * containerSize.width}px;

        @media screen and (min-width: 991px) {
          /* width: ${width * 0.39 - margin}px; */
          width: 40%;
          height: ${gridHeight * (width * 0.6)}px;
        }
      `}
      {...props}
    >
      <Logo />
    </div>
  );
};

export default OctoShop;
