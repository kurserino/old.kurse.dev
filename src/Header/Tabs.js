import React, { useRef } from "react";

import { css, jsx } from "@emotion/react";
import Tab from "./Tab";
import OpenNewTab from "./OpenNewTab";
import { useSelector } from "react-redux";

export const Tabs = ({
  containerSize,
  tabRefs,
  mouse,
  tabOffset,
  ...props
}) => {
  const tabs = useSelector((state) => state.tabs.tabs);
  const tabsRef = useRef();

  const renderTab = (tab, index) => {
    return (
      <Tab
        key={tab.id}
        index={index}
        id={tab.id}
        href={tab.href}
        icon={tab.icon}
        mouse={mouse}
        tabOffset={tabOffset}
        tabRefs={tabRefs}
        tabsRef={tabsRef}
        {...props}
      >
        {tab.title}
      </Tab>
    );
  };

  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        position: relative;
      `}
    >
      {tabs && tabs.map((tab, i) => renderTab(tab, i))}
      <OpenNewTab />
    </div>
  );
};

export default Tabs;
