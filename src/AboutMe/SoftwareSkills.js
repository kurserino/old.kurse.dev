import React from "react";
import { css, jsc } from "@emotion/react";
import { Tooltip } from "react-tippy";
import { tooltipParams } from "../config.js";
import Info from "./Info";
import Text from "./Text";
import Area from "./Area";
import Title from "./Title";
import Skill from "./Skill";

// Svg
import { ReactComponent as PhotoshopLogo } from "./svg/photoshop.svg";
import { ReactComponent as IllustratorLogo } from "./svg/illustrator.svg";
import { ReactComponent as ProcreateLogo } from "./svg/procreate.svg";
import { ReactComponent as FigmaLogo } from "./svg/figma.svg";
import { ReactComponent as GodotLogo } from "./svg/godot.svg";

const WorkExperience = ({ ...props }) => {
  return (
    <Area isSkill>
      <Title>Software skills</Title>
      <Skill>
        <Tooltip title="Photoshop" {...tooltipParams}>
          <PhotoshopLogo height={45} />
        </Tooltip>
      </Skill>
      <Skill>
        <Tooltip title="Illustrator" {...tooltipParams}>
          <IllustratorLogo height={45} />
        </Tooltip>
      </Skill>
      <Skill>
        <Tooltip title="Procreate" {...tooltipParams}>
          <ProcreateLogo height={45} />
        </Tooltip>
      </Skill>
      <Skill>
        <Tooltip title="Figma" {...tooltipParams}>
          <FigmaLogo height={45} />
        </Tooltip>
      </Skill>
      <Skill>
        <Tooltip title="Godot" {...tooltipParams}>
          <GodotLogo height={45} />
        </Tooltip>
      </Skill>
    </Area>
  );
};

export default WorkExperience;
