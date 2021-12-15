import React, { useRef } from "react";
import { css } from "@emotion/react";
import { useAppSelector, useAppDispatch } from "../hooks";
import colors from "../colors";
import Tab from "./Tab";
import OpenNewTab from "./OpenNewTab";
import { setOpen } from "../store/slices/tabs";

const Blocker = ({ ...props }) => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((store) => store.tabs.isOpen);

  return (
    <div
      onClick={(e) => dispatch(setOpen(false))}
      css={css`
        position: fixed;
        width: 100%;
        height: 100%;
        background: ${colors.black};
        top: 0;
        left: 0;
        visibility: ${isOpen ? "visible" : "hidden"};
        opacity: ${isOpen ? ".5" : "0"};
        transition: all 0.3s ease-in-out;
        z-index: 1;
      `}
    ></div>
  );
};

export const Tabs = ({ tabRefs, mouse, tabOffset, ...props }) => {
  const tabsRef = useRef();
  const containerSize = useAppSelector((state) => state.container);
  const isOpen = useAppSelector((store) => store.tabs.isOpen);
  const isMobile = containerSize.display === "mobile";
  const tabs = useAppSelector((state) => state.tabs.tabs);
  const menu = useAppSelector((state) => state.tabs.menu);
  const items = isMobile ? menu : tabs;

  return (
    <>
      <div
        css={css`
          display: flex;
          position: relative;
          z-index: 1;

          @media (max-width: 991px) {
            width: 70vw;
            transform: translateX(-${isOpen ? 0 : 100}%);
            flex-direction: column;
            justify-content: center;
            background: #fff;
            height: 100vh;
            text-align: left;
            padding: 2rem;
            position: fixed;
            top: 0;
            left: 0;
            transition: transform 0.3s ease-in-out;
            z-index: 2;
          }

          @media screen and (min-width: 991px) {
            justify-content: space-between;
          }
        `}
      >
        {items &&
          items.map((el, index) => (
            <Tab
              key={el.id}
              index={index}
              id={el.id}
              href={el.href}
              icon={el.icon}
              mouse={mouse}
              tabOffset={tabOffset}
              tabRefs={tabRefs}
              tabsRef={tabsRef}
              {...props}
            >
              {el.title}
            </Tab>
          ))}
        {!isMobile && <OpenNewTab />}
      </div>
      <Blocker />
    </>
  );
};

export default Tabs;
