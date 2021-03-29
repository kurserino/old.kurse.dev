import React, { Suspense } from "react";
import { css, jsx } from "@emotion/react";
import CloseButton from "./Modal/CloseButton";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
  useParams,
} from "react-router-dom";
import colors from "../colors"
import config from "../config"
import {useSelector} from "react-redux";

var OsExperiment = React.lazy(() => import("./Modal/Content/OsExperiment"));
var OctoShop = React.lazy(() => import("./Modal/Content/OctoShop"));
var Password = React.lazy(() => import("./Modal/Content/Password"));

const modalContentIndex = {
  "os-experiment": OsExperiment,
  "octo-shop": OctoShop,
  "password": Password,
};

var Modal = ({ children, modalContent, ...props }) => {
  const { project } = useParams();
  const history = useHistory();
  const ModalComponent = modalContentIndex[project];
  var containerSize = useSelector((state) => state.container);
  var display = containerSize.display;
  var borderRadius = config[display].borderRadius;
  return (
    <div
      css={css`
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        padding: 38px;
        width: 825px;
        height: auto;
        background: ${colors.lynxWhite};
        box-shadow: 0px 34px 54px rgba(0, 0, 0, 0.09);
        border: 1px solid ${colors.black};
        border-radius: ${borderRadius}px;

        @media screen and (min-width: 991px) {
          height: 426px;
        }
      `}
      {...props}
    >
      <CloseButton onClick={(e) => history.push("/")} />
      <Suspense fallback={<div>Loading...</div>}>
        {ModalComponent && <ModalComponent />}
      </Suspense>
    </div>
  );
};

export default Modal;
