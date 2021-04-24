import React, { useState } from "react";
import { css, jsx } from "@emotion/react";
import { useSelector, useDispatch } from "react-redux";
import colors from "../colors";
import config from "../config";
import Star from "./Password/Star";
import Box from "./Password/Box";
import Logo from "./Password/Logo";
import { useParams } from "react-router-dom";

var Password = ({ projectRef, containerSize, ...props }) => {
  const { project } = useParams();
  var isActive = project === "password";
  var containerSize = useSelector((state) => state.container);
  var width = containerSize.width ? containerSize.width : 0;
  var display = containerSize.display;
  const isMobile = display === "mobile";
  var margin = config[display].margin;
  var gridHeight = config[display].grid.height;
  return (
    <div
      ref={projectRef}
      css={css`
        display: flex;
        flex-direction: column;
        background-color: ${colors.deepPink};
        overflow: hidden;
        position: relative;
        border-radius: ${config[display].borderRadius}px;
        width: calc(100% - ${margin});
        height: ${gridHeight * containerSize.width}px;
        margin: 0 0 15px;

        @media screen and (min-width: 991px) {
          margin: ${margin}px;
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
