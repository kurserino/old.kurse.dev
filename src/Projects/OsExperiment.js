import React, { useState } from "react";
import { css, jsx } from "@emotion/react";
import colors from "../colors";
import config from "../config";
import Reincarnation from "./OsExperiment/Reincarnation";
import Logo from "./OsExperiment/Logo";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

var OsExperiment = ({ projectRef, ...props }) => {
  const { project } = useParams();
  var isActive = project === "os-experiment";
  var containerSize = useSelector((state) => state.container);
  var width = containerSize.width;
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
        background-color: ${colors.vividYellow};
        overflow: hidden;
        position: relative;
        border-radius: ${config[display].borderRadius}px;
        width: calc(100% - ${margin});
        height: ${gridHeight * containerSize.width}px;
        margin: 0 0 15px;
        transition: height ${isActive ? 0.3 : 0}s ease-in-out;

        @media screen and (min-width: 991px) {
          margin: ${margin}px;
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
