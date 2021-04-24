import React, { useState } from "react";
import { css, jsx } from "@emotion/react";
import colors from "../colors";
import config from "../config";
import Logo from "./OctoShop/Logo";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

var OctoShop = ({ projectRef, ...props }) => {
  const { project } = useParams();
  var isActive = project === "octo-shop";
  var containerSize = useSelector((state) => state.container);
  const display = containerSize.display;
  const isMobile = display === "mobile";
  var width = containerSize.width;
  var margin = config[containerSize.display].margin;
  var gridHeight = config[containerSize.display].grid.height;


  return (
    <div
      ref={projectRef}
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: ${colors.dodgerBlue};
        overflow: hidden;
        position: relative;
        border-radius: ${config[containerSize.display].borderRadius}px;
        width: calc(100% - ${margin});
        height: ${gridHeight * containerSize.width}px;
        margin: 0 0 15px;

        @media screen and (min-width: 991px) {
          margin: ${margin}px;
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
