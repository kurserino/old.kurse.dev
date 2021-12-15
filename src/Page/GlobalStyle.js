import React, { useRef } from "react";
import { Global, css } from "@emotion/react";
import reset from "emotion-reset";
import { useAppSelector } from "../hooks";
import { useRouter } from "next/router";

const GlobalStyle = ({ ...props }) => {
  const isMenuOpen = useAppSelector((state) => state.tabs.isOpen);
  const isGameStarted = useAppSelector((state) => state.projects.isGameStarted);
  const router = useRouter();
  const isModalOpen = router.pathname.startsWith("/projects");
  const isScrollDisabled = isMenuOpen || isModalOpen;

  return (
    <Global
      styles={css`
        ${reset}
        html {
          box-sizing: border-box;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
        body {
          font-family: "Lato", sans-serif;

          @media screen and (min-width: 991px) {
            background: #ddd;
          }
        }
        svg {
          display: block;

          * {
            shape-rendering: geometricPrecision;
          }
        }

        ${isScrollDisabled &&
        css`
          #__next > .scrollbar-container {
            scroll-behavior: smooth;
          }
        `}
      `}
      {...props}
    />
  );
};

export default GlobalStyle;
