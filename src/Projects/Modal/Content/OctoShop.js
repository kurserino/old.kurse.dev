import React from "react";
import { css } from "@emotion/react";
import Title from "../Title";
import Text from "../Text";
import Divider from "../Divider";
import ButtonsWrapper from "../ButtonsWrapper";
import Button from "../Button";

const OctoShop = ({ ...props }) => (
  <div
    css={css`
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
    `}
  >
    <Title>OCTO.SHOP</Title>
    <Text>Frontend project for a magento ecommerce at OctoXB company.</Text>
    <Divider size={100} />
    <Text>
      Octo is an ecommerce and technology company that connect brazilian
      consumers and chinese sellers.
    </Text>
    <ButtonsWrapper>
      <Button href="https://octo.shop" target="_blank">
        Take a look at this project
      </Button>
    </ButtonsWrapper>
  </div>
);

export default OctoShop;
