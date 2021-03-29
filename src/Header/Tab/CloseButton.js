import React, { useEffect } from "react";
import { css, jsx } from "@emotion/react";
import CloseIcon from "../../Icons/Close";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setTabs, setClosedTabs } from "../../store/slices/tabs";

var CloseButton = ({ id, href, index, ...props }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  var tabs = useSelector((store) => store.tabs.tabs);
  var closedTabs = useSelector((store) => store.tabs.closedTabs);
  var path = window.location.pathname;
  var isProjects = path == "/" || path.startsWith("/projects");
  var isActive = href == "/" ? isProjects : path.startsWith(href);
  var isLastTab = index == tabs.length - 1;
  var hasOnlyOneTab = isLastTab && tabs.length == 1;

  return (
    <div
      className="closeButton"
      css={css`
        margin-left: auto;
        cursor: pointer;

        ${hasOnlyOneTab &&
        css`
          pointer-events: none;
          opacity: 0.4;
        `}
      `}
      onClick={() => {
        // Update closed tabs
        var closedTab = tabs.find((tab, i) => tab.id == id);
        var updatedClosedTabs = [...closedTabs];
        updatedClosedTabs.push(closedTab);
        dispatch(setClosedTabs(updatedClosedTabs));

        // Update tabs
        var updatedTabs = tabs.filter((tab, i) => tab.id != id);
        dispatch(setTabs(updatedTabs));

        // If closed tab are first one, active the new first one
        if (isActive) {
          if (index == 0) {
            history.push(updatedTabs[0].href);
          } else {
            // If last
            if (isLastTab) {
              // Get the previous tab to show if last
              let closedIndex = tabs.findIndex((tab, i) => tab.id == id);
              history.push(tabs[closedIndex - 1].href);
            } else {
              // Get the previous tab to show if last
              let closedIndex = tabs.findIndex((tab, i) => tab.id == id);
              console.log(closedIndex);
              history.push(updatedTabs[closedIndex].href);
            }
          }
        }
      }}
      {...props}
    >
      <CloseIcon width="10" />
    </div>
  );
};

export default CloseButton;
