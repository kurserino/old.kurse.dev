import React from "react";
import { css } from "@emotion/react";
import Logo from "./Header/Logo";
import Tabs from "./Header/Tabs";
import Icons from "./Header/Icons";
import Burger from "./Header/Burger";
import { useAppSelector } from "./hooks";

var Header = ({ windowSize, mouse, tabRefs, tabOffset, ...props }) => {
  const containerSize = useAppSelector((store) => store.container);
  return (
    <div
      css={css`
        display: flex;
        width: 100%;

        @media screen and (min-width: 991px) {
          align-items: flex-end;
        }
      `}
      {...props}
    >
      {containerSize.display === "mobile" && <Burger />}
      <Logo windowSize={windowSize} />
      <Tabs tabRefs={tabRefs} mouse={mouse} tabOffset={tabOffset} />
      <Icons />
    </div>
  );
};

export default Header;
