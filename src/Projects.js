import React from "react";
import { css } from "@emotion/react";
import Modal from "./Projects/Modal";
import Password from "./Projects/Password";
import Snake from "./Projects/Snake";
import OsExperiment from "./Projects/OsExperiment";
import OctoShop from "./Projects/OctoShop";
import Page from "./Page";
import Scrollbar from "./Scrollbar";
import Row from "./Projects/Row";
import { useAppSelector } from "./hooks";
import { useRouter } from "next/router";

var Projects = ({ ...props }) => {
  const router = useRouter();
  const { project } = router.query;
  const containerSize = useAppSelector((store) => store.container);
  const isMobile = containerSize.display === "mobile";

  return (
    <Scrollbar>
      <Page>
        <div
          css={css`
            width: 100%;
            position: relative;
          `}
        >
          {project && <Modal />}

          <Row>
            <OsExperiment
              onClick={(e) =>
                router.push("/projects/os-experiment", undefined, {
                  shallow: true,
                })
              }
            />
            <OctoShop
              onClick={(e) =>
                router.push("/projects/octo-shop", undefined, { shallow: true })
              }
            />
          </Row>
          <Row>
            <Password
              onClick={(e) =>
                router.push("/projects/password", undefined, { shallow: true })
              }
            />
            {!isMobile && <Snake />}
          </Row>
        </div>
      </Page>
    </Scrollbar>
  );
};

export default Projects;
