import { css } from "@emotion/react";
import React from "react";
import "react-tippy/dist/tippy.css";
import DevelopmentSkills from "./AboutMe/DevelopmentSkills";
import Education from "./AboutMe/Education";
import Info from "./AboutMe/Info";
import SoftwareSkills from "./AboutMe/SoftwareSkills";
import WorkExperience from "./AboutMe/WorkExperience";
import Page from "./Page";
import Scrollbar from "./Scrollbar";

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
