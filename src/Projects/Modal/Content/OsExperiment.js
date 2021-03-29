import React from "react";
import styled from "@emotion/styled";
import Title from "../Title";
import Text from "../Text";
import Divider from "../Divider";
import ButtonsWrapper from "../ButtonsWrapper";
import Button from "../Button";
import Link from "../Link";
import GithubIcon from "../GithubIcon";

var OsExperiment = ({ className }) => (
  <div className={className}>
    <Title>OS EXPERIMENT</Title>
    <Text>An interactive operating system simulation.</Text>
    <Divider size={100} />
    <Text>
      A way to show many different types of media in a single project made me create this operating system environment to display my artworks and other stuff.
    </Text>
    <ButtonsWrapper>
      <Button href="https://kuurse.com" target="_blank">
        Take a look at this project
      </Button>
      <Button isWhite href="https://github.com/iamkrs/kuurse" target="_blank">
        <GithubIcon width={20} height={20} />
        View on github
      </Button>
    </ButtonsWrapper>
  </div>
);

var StyledOsExperiment = styled(OsExperiment)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default StyledOsExperiment;
