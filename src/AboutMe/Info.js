import React from "react";
import { css, jsx } from "@emotion/react";
import Avatar from "./Avatar";
import Name from "./Name";
import Text from "./Text";
import Area from "./Area";


const Info = ({ ...props }) => {
  return (
    <Area>
      <Avatar />
      <Name>Kurse</Name>
      <Text>Full stack developer</Text>
      <Text>Lucas Ruivo Maturo</Text>
      <Text>Curitiba, PR - Brazil</Text>
    </Area>
  );
};
export default Info;
