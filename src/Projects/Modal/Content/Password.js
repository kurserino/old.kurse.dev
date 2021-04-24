import React from "react";
import { css, jsx } from "@emotion/react";
import Title from "../Title";
import Text from "../Text";
import Divider from "../Divider";
import ButtonsWrapper from "../ButtonsWrapper";
import Button from "../Button";
import Link from "../Link";
import GithubIcon from "../GithubIcon";
import colors from "../../../colors";

var OctoShop = ({ ...props }) => (
  <div
    css={css`
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
    `}
  >
    <Title>PASSWORD</Title>
    <Text>A point and click game to escape the room.</Text>
    <Divider size={100} />
    <Text>
      A game made for global game jam 2021 in collaboration with{" "}
      <a
        href="https://www.instagram.com/karolinamarqp/"
        target="_blank"
        css={css`
          color: ${colors.black};
        `}
      >
        Karolina Marques
      </a>
      .
    </Text>
    <Text>Game was developed in 48 hours with Godot Engine.</Text>
    <ButtonsWrapper>
      <Button
        href="https://globalgamejam.org/2021/games/password-4"
        target="_blank"
      >
        Take a look at this project
      </Button>
      {/* <Link href="https://github.com/iamkrs/kuurse" target="_blank">
        <GithubIcon width={20} height={20} />
        View on github
      </Link> */}
    </ButtonsWrapper>
  </div>
);

export default OctoShop;
