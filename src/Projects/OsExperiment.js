import React, { useState } from "react";
import { css, jsx } from "@emotion/react";
import colors from "../colors";
import config from "../config";
import Reincarnation from "./OsExperiment/Reincarnation";
import Logo from "./OsExperiment/Logo";
import { useSelector, useDispatch } from "react-redux";

var OsExperiment = ({ ...props }) => {
  var containerSize = useSelector((state) => state.container);
  var width = containerSize.width;
  var display = containerSize.display;
  var margin = config[display].margin;
  var gridHeight = config[display].grid.height;
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        background-color: ${colors.vividYellow};
        overflow: hidden;
        position: relative;
        margin: ${margin}px;
        border-radius: ${config[display].borderRadius}px;
        width: 100%;
        height: ${gridHeight * containerSize.width}px;

        @media screen and (min-width: 991px) {
          /* width: ${width * 0.6 - margin}px; */
          width: 60%;
          height: ${gridHeight * (width * 0.6)}px;
        }
      `}
      {...props}
    >
      <Logo />
      <Reincarnation />
    </div>
  );
};

export default OsExperiment;
