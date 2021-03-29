import React from "react";
import { css, jsx } from "@emotion/react";
import "react-tippy/dist/tippy.css";

import Info from "./AboutMe/Info";
import WorkExperience from "./AboutMe/WorkExperience";
import Education from "./AboutMe/Education";
import DevelopmentSkills from "./AboutMe/DevelopmentSkills";
import SoftwareSkills from "./AboutMe/SoftwareSkills";


var AboutMe = ({ ...props }) => {
  return (
    <div
      css={css`
        width: 100%;
        padding: 26px;
      `}
    >
      <Info />
      <WorkExperience />
      <Education/>
      <DevelopmentSkills/>
      <SoftwareSkills />
    </div>
  );
};

export default AboutMe;
