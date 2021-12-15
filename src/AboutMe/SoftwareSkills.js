import React from "react";
import { Tooltip } from "react-tippy";
import { tooltipParams } from "../config.js";
import Area from "./Area";
import Title from "./Title";
import Skill from "./Skill";

// Svg
import PhotoshopLogo from "./svg/photoshop.svg";
import IllustratorLogo from "./svg/illustrator.svg";
import ProcreateLogo from "./svg/procreate.svg";
import FigmaLogo from "./svg/figma.svg";
import GodotLogo from "./svg/godot.svg";

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
