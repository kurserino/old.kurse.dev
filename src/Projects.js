import React from "react";
import { css, jsx } from "@emotion/react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Modal from "./Projects/Modal";
import Password from "./Projects/Password";
import Snake from "./Projects/Snake";
import OsExperiment from "./Projects/OsExperiment";
import OctoShop from "./Projects/OctoShop";
import Row from "./Projects/Row";

var Projects = ({ setModalContent, containerSize }) => {
  var { project } = useParams();
  let history = useHistory();
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
        <Snake />
      </Row>
    </div>
  );
};

export default Projects;
