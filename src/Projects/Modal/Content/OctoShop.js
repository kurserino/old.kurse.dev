import React from "react";
import styled from "@emotion/styled";
import Title from "../Title";
import Text from "../Text";
import Divider from "../Divider";
import ButtonsWrapper from "../ButtonsWrapper";
import Button from "../Button";
import Link from "../Link";
import GithubIcon from "../GithubIcon";

var OctoShop = ({ className }) => (
  <div className={className}>
    <Title>OCTO.SHOP</Title>
    <Text>Frontend project for a magento ecommerce at OctoXB company.</Text>
    <Divider size={100} />
    <Text>
    Octo is an ecommerce and technology company that connect brazilian consumers and chinese sellers.
    </Text>
    <ButtonsWrapper>
      <Button href="https://octo.shop" target="_blank">
        Take a look at this project
      </Button>
      {/* <Link href="https://github.com/iamkrs/kuurse" target="_blank">
        <GithubIcon width={20} height={20} />
        View on github
      </Link> */}
    </ButtonsWrapper>
  </div>
);

var StyledOctoShop = styled(OctoShop)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default StyledOctoShop;
