import React from "react";
import {css, jsx} from "@emotion/react";

var Link = (props) => (
  <a
    css={css`
      margin: 0 0 0 10px;
      width: auto;
      text-decoration: none;
      color: #333;
      font-weight: normal;
      font-size: 15.3734px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    `}
    {...props}
  >
    {props.children}
  </a>
);

export default Link;
