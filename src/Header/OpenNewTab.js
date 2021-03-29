import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { css, jsx } from "@emotion/react";
import { setTabs, setClosedTabs } from "../store/slices/tabs";

const OpenNewTab = ({ ...props }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const tabs = useSelector((state) => state.tabs.tabs);
  const closedTabs = useSelector((state) => state.tabs.closedTabs);
  const tabsWidth = tabs.length * 140;
  const marginLeft = 6;

  return (
    <a
      css={css`
        position: absolute;
        top: -26px;
        left: ${tabsWidth + marginLeft}px;
        /* transition: all 0.3s ease-in-out; */

        ${!closedTabs.length &&
        css`
          pointer-events: none;
          opacity: 0.3;
        `}
      `}
      onClick={() => {
        var updatedClosedTabs = [...closedTabs];
        var tabToOpen = updatedClosedTabs.shift();
        var updatedTabs = [...tabs];
        updatedTabs.push(tabToOpen);

        // Update tabs
        dispatch(setTabs(updatedTabs));

        // Update closed tabs
        dispatch(setClosedTabs(updatedClosedTabs));

        // Go to recently opened tab
        // history.push(tabToOpen.href);
      }}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.06951 0.984828L6.59281 0.984829L6.59281 6.83928L0.738353 6.83928V8.31599L6.59281 8.31599L6.59281 14.1704L8.06951 14.1704L8.06951 8.31599L13.924 8.31599V6.83928L8.06951 6.83928L8.06951 0.984828Z"
          fill="black"
        />
      </svg>
    </a>
  );
};

export default OpenNewTab;
