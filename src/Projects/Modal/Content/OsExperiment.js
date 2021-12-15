import { css } from "@emotion/react";
import Title from "../Title";
import Text from "../Text";
import Divider from "../Divider";
import ButtonsWrapper from "../ButtonsWrapper";
import Button from "../Button";
import GithubIcon from "../GithubIcon";

const OsExperiment = ({ ...props }) => (
  <div
    css={css`
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
    `}
  >
    <Title>OS EXPERIMENT</Title>
    <Text>An interactive operating system experiment.</Text>
    <Divider size={100} />
    <Text></Text>
    <ButtonsWrapper>
      <Button href="/os-experiment" target="_blank">
        Take a look at this project
      </Button>
      <Button isWhite href="https://github.com/iamkrs/os-experiment" target="_blank">
        <GithubIcon width={20} height={20} />
        View on github
      </Button>
    </ButtonsWrapper>
  </div>
);

export default OsExperiment;
