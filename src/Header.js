import React from "react";
import { css, jsx } from "@emotion/react";
import Logo from "./Header/Logo";
import Tabs from "./Header/Tabs";
import Icons from "./Header/Icons";

var Header = ({
  windowSize,
  mouse,
  tabRefs,
  tabOffset,
  ...props
}) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: flex-end;
        /* padding: 0 26px; */
        /* padding-top: 24px; */
        width: 100%;

        @media screen and (min-width: 991px) {
        }
      `}
      {...props}
    >
      <Logo windowSize={windowSize} />
      <Tabs
        tabRefs={tabRefs}
        mouse={mouse}
        tabOffset={tabOffset}
      />
      <Icons />
    </div>
  );
};

export default Header;
