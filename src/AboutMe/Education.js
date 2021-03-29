import React from "react";
import { css, jsc } from "@emotion/react";
import { Tooltip } from "react-tippy";
import Info from "./Info";
import Area from "./Area";
import Text from "./Text";
import Title from "./Title";

const WorkExperience = ({ ...props }) => {
  return (
    <Area
    >
      <Title>Education</Title>
      <Text marginBottom={30}>
        Graphic design bachelor degree @ Universidade Positivo (Curitiba, Brazil)
      </Text>
    </Area>
  );
};

export default WorkExperience;
