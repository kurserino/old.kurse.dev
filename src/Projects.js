import React, { useRef } from "react";
import { css, jsx } from "@emotion/react";
import { useHistory, useParams } from "react-router-dom";
import Modal from "./Projects/Modal";
import Password from "./Projects/Password";
import Snake from "./Projects/Snake";
import OsExperiment from "./Projects/OsExperiment";
import OctoShop from "./Projects/OctoShop";
import Row from "./Projects/Row";
import { useSelector } from "react-redux";

var Projects = ({ ...props }) => {
  const { project } = useParams();
  const history = useHistory();
  const containerSize = useSelector((store) => store.container);
  const isMobile = containerSize.display === "mobile";

  return (
    <div
      css={css`
        width: 100%;
        position: relative;
      `}
    >
      {project && <Modal />}
      <Row>
        <OsExperiment
          onClick={(e) => history.push("/projects/os-experiment")}
        />
        <OctoShop onClick={(e) => history.push("/projects/octo-shop")} />
      </Row>
      <Row>
        <Password onClick={(e) => history.push("/projects/password")} />
        {!isMobile && <Snake />}
      </Row>
    </div>
  );
};

export default Projects;
