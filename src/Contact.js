import React from "react";
import { css, jsx } from "@emotion/react";
import Dog from "./Contact/Dog";
import Info from "./Contact/Info";
import Title from "./Contact/Title";
import Text from "./Contact/Text";
import Email from "./Contact/Email";
import Instagram from "./Contact/Instagram";

const Contact = ({ ...props }) => {
  return (
    <div
      css={css`
        position: relative;
        display: flex;
        width: 100%;
      `}
    >
      <Dog />
      <Info>
        <Title>Let’s work together</Title>
        <Text>Or just say a hello! You can send me a email:</Text>
        <Title isSmall>My email</Title>
        <Email>lucas.kurse@hotmail.com</Email>
        <Instagram url="#"/>
      </Info>
    </div>
  );
};

export default Contact;
