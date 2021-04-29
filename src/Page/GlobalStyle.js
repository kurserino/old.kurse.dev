import React, { useRef } from "react";
import { Global, css } from "@emotion/react";
import reset from "emotion-reset";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const GlobalStyle = ({ ...props }) => {
  const isMenuOpen = useSelector((state) => state.tabs.isOpen);
  const isGameStarted = useSelector((state) => state.projects.isGameStarted);
  const location = useLocation();
  const isModalOpen = location.pathname.startsWith("/projects");
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
          #root > .scrollbar-container {
            scroll-behavior: smooth;
          }
        `}
      `}
      {...props}
    />
  );
};

export default GlobalStyle;
