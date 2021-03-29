import React from "react";
import { css, jsc } from "@emotion/react";
import { Tooltip } from "react-tippy";
import { tooltipParams } from "../config.js";
import Info from "./Info";
import Area from "./Area";
import Title from "./Title";
import Text from "./Text";
import Skill from "./Skill";

// Svg
import { ReactComponent as ReactLogo } from "./svg/react.svg";
import { ReactComponent as ReduxLogo } from "./svg/redux.svg";
import { ReactComponent as NodeJsLogo } from "./svg/nodejs.svg";
import { ReactComponent as SassLogo } from "./svg/sass.svg";
import { ReactComponent as GulpLogo } from "./svg/gulp.svg";
import { ReactComponent as KnockoutJsLogo } from "./svg/knockoutjs.svg";
import { ReactComponent as MagentoLogo } from "./svg/magento.svg";
import { ReactComponent as GitLogo } from "./svg/git.svg";
import { ReactComponent as NginxLogo } from "./svg/nginx.svg";
import { ReactComponent as PhpLogo } from "./svg/php.svg";
import { ReactComponent as MongoDbLogo } from "./svg/mongodb.svg";
import { ReactComponent as ExpressLogo } from "./svg/express.svg";

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
