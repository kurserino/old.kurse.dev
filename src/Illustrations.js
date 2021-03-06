import React, { useEffect } from "react";
import { useAppSelector } from "./hooks";
import { css } from "@emotion/react";
import axios from "axios";

var AboutMe = ({ ...props }) => {
  const fetchIllustrations = (end_cursor) => {
    axios
      .get(`/api/illustrations`)
      .then(function (response) {})
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  fetchIllustrations();

  return (
    <div
      css={css`
        width: 100%;
        padding: 26px;
      `}
    ></div>
  );
};

export default AboutMe;
