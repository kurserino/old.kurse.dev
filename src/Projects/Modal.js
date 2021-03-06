import React, { Suspense } from "react";
import { css } from "@emotion/react";
import CloseButton from "./Modal/CloseButton";
import dynamic from "next/dynamic";
import colors from "../colors";
import config from "../config";
import { useAppSelector } from "../hooks";
import { useRouter } from "next/router";

const OsExperiment = dynamic(() => import("./Modal/Content/OsExperiment"));
const OctoShop = dynamic(() => import("./Modal/Content/OctoShop"));
const Password = dynamic(() => import("./Modal/Content/Password"));

const modalContentIndex = {
  "os-experiment": OsExperiment,
  "octo-shop": OctoShop,
  password: Password,
};

const Blocker = ({ ...props }) => {
  const router = useRouter();
  return (
    <div
      onClick={(e) => {
        router.push("/", undefined, { shallow: true });
      }}
      css={css`
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: ${colors.black};
        opacity: 0.6;
        z-index: 1;
      `}
    ></div>
  );
};

const Modal = ({ children, modalContent, refs, ...props }) => {
  const router = useRouter();
  const { project } = router.query;
  const ModalComponent = modalContentIndex[project];
  const containerSize = useAppSelector((state) => state.container);
  const display = containerSize.display;
  const borderRadius = config[display].borderRadius;

  return (
    <>
      <div
        css={css`
          z-index: 3;
          display: flex;
          flex-direction: column;
          background: ${colors.lynxWhite};
          box-shadow: 0px 34px 54px rgba(0, 0, 0, 0.09);
          width: 100%;
          position: fixed;
          padding: 38px;
          border: 1px solid ${colors.black};
          top: 0px;
          left: 0px;
          height: 100%;

          @media screen and (min-width: 991px) {
            border-radius: ${borderRadius}px;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
            width: 825px;
            height: 426px;
          }
        `}
        {...props}
      >
        <CloseButton onClick={(e) => router.push("/")} />
        <Suspense fallback={<div>Loading...</div>}>
          {ModalComponent && <ModalComponent />}
        </Suspense>
      </div>
      <Blocker />
    </>
  );
};

export default Modal;
