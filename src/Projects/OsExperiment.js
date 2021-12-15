import { css } from "@emotion/react";
import colors from "../colors";
import config from "../config";
import Reincarnation from "./OsExperiment/Reincarnation";
import Logo from "./OsExperiment/Logo";
import { useAppSelector } from "../hooks";
import { useRouter } from "next/router";

var OsExperiment = ({ projectRef, ...props }) => {
  const router = useRouter();
  const { project } = router.query;

  var isActive = project === "os-experiment";
  var containerSize = useAppSelector((state) => state.container);
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
