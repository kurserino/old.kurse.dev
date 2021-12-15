import React from "react";
import { css } from "@emotion/react";
import Page from "./Page";
import Scrollbar from "./Scrollbar";
import Info from "./AboutMe/Info";
import WorkExperience from "./AboutMe/WorkExperience";
import Education from "./AboutMe/Education";
import DevelopmentSkills from "./AboutMe/DevelopmentSkills";
import SoftwareSkills from "./AboutMe/SoftwareSkills";

import "react-tippy/dist/tippy.css";

var AboutMe = ({ ...props }) => {
  return (
    <Scrollbar>
      <Page>
        <div
          css={css`
            width: 100%;

            @media screen and (min-width: 991px) {
              padding: 26px;
            }

            @media screen and (max-width: 991px) {
              padding-top: 10px;
            }
          `}
        >
          <Info />
          <WorkExperience />
          <Education />
          <DevelopmentSkills />
          <SoftwareSkills />
        </div>
      </Page>
    </Scrollbar>
  );
};

export default AboutMe;
