import { Global, css } from "@emotion/react";
import reset from "emotion-reset";

const GlobalStyle = ({ ...props }) => {
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
        }
      `}
      {...props}
    />
  );
};

export default GlobalStyle;
