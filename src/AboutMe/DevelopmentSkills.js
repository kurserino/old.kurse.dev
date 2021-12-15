import React from "react";
import { Tooltip } from "react-tippy";
import { tooltipParams } from "../config.js";
import Area from "./Area";
import Title from "./Title";
import Skill from "./Skill";

// Svg
import ReactLogo from "./svg/react.svg";
import ReduxLogo from "./svg/redux.svg";
import NodeJsLogo from "./svg/nodejs.svg";
import SassLogo from "./svg/sass.svg";
import GulpLogo from "./svg/gulp.svg";
import KnockoutJsLogo from "./svg/knockoutjs.svg";
import MagentoLogo from "./svg/magento.svg";
import GitLogo from "./svg/git.svg";
import NginxLogo from "./svg/nginx.svg";
import PhpLogo from "./svg/php.svg";
import MongoDbLogo from "./svg/mongodb.svg";
import ExpressLogo from "./svg/express.svg";

const WorkExperience = ({ ...props }) => {
  return (
    <Area isSkill>
      <Title>Development skills</Title>

      <Skill>
        <Tooltip title="React" {...tooltipParams}>
          <ReactLogo height={45} />
        </Tooltip>
      </Skill>

      <Skill>
        <Tooltip title="Redux" {...tooltipParams}>
          <ReduxLogo height={45} />
        </Tooltip>
      </Skill>

      <Skill marginTop={-4} translateY={3}>
        <Tooltip title="NodeJS" {...tooltipParams}>
          <NodeJsLogo height={49} />
        </Tooltip>
      </Skill>

      <Skill>
        <Tooltip title="Sass" {...tooltipParams}>
          <SassLogo height={45} />
        </Tooltip>
      </Skill>

      <Skill translateY={4} marginTop={-11}>
        <Tooltip title="Gulp" {...tooltipParams}>
          <GulpLogo height={56} />
        </Tooltip>
      </Skill>

      <Skill>
        <Tooltip title="KnockoutJS" {...tooltipParams}>
          <KnockoutJsLogo height={45} />
        </Tooltip>
      </Skill>

      <Skill translateY={3}>
        <Tooltip title="Magento 1" {...tooltipParams}>
          <MagentoLogo height={45} />
        </Tooltip>
      </Skill>

      <Skill>
        <Tooltip title="Git" {...tooltipParams}>
          <GitLogo height={45} />
        </Tooltip>
      </Skill>

      <Skill>
        <Tooltip title="Nginx" {...tooltipParams}>
          <NginxLogo height={45} />
        </Tooltip>
      </Skill>

      <Skill>
        <Tooltip title="Php" {...tooltipParams}>
          <PhpLogo height={45} />
        </Tooltip>
      </Skill>

      <Skill translateY={-2}>
        <Tooltip title="MongoDb" {...tooltipParams}>
          <MongoDbLogo height={45} />
        </Tooltip>
      </Skill>

      <Skill>
        <Tooltip title="Express" {...tooltipParams}>
          <ExpressLogo height={45} />
        </Tooltip>
      </Skill>
    </Area>
  );
};

export default WorkExperience;
