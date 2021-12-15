import React from "react";
import { css } from "@emotion/react";
import Page from "./Page";
import Scrollbar from "./Scrollbar";
import Dog from "./Contact/Dog";
import Info from "./Contact/Info";
import Title from "./Contact/Title";
import Text from "./Contact/Text";
import Email from "./Contact/Email";
import Instagram from "./Contact/Instagram";

const Contact = ({ ...props }) => {
  return (
    <Scrollbar>
      <Page>
        <div
          css={css`
            position: relative;
            display: flex;
            width: 100%;
            flex-direction: column;

            @media screen and (min-width: 991px) {
              flex-direction: row;
            }
          `}
        >
          <Dog />
          <Info>
            <Title>Let’s work together</Title>
            <Text>Or just say a hello! You can send me a email:</Text>
            {/* <Title isSmall>My email</Title> */}
            <Email>lucas.kurse@hotmail.com</Email>
            <Instagram url="https://instagram.com/kuurse" />
          </Info>
        </div>
      </Page>
    </Scrollbar>
  );
};

export default Contact;
