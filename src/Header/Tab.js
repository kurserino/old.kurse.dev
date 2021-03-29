import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInitialPos } from "../store/slices/tabs";
import { useHistory } from "react-router-dom";
import { css, jsx } from "@emotion/react";
import Icon from "./Tab/Icon";
import config from "../config";
import colors from "../colors";
import CloseButton from "./Tab/CloseButton";
import Square from "../Icons/Square";
import {
  setDragging,
  setInitialClick,
  setInitialIndex,
  setRect,
} from "../store/slices/tabs";

var Tab = ({ tabRefs, href, id, index, ...props }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  var windowSize = useSelector((store) => store.window.size);
  var tabRef = tabRefs[id];
  var path = window.location.pathname;
  var isProjects = path == "/" || path.startsWith("/projects");
  var isActive = href == "/" ? isProjects : path.startsWith(href);
  var containerSize = useSelector((state) => state.container);
  var margin = config[containerSize.display].margin;
  var borderRadius = config[containerSize.display].borderRadius;
  
  const mouse = useSelector((state) => state.mouse);
  const { docX, docY, posX, posY, elX, elY, elW, elH } = mouse;
  
  const container = useSelector((state) => state.container);
  const dragging = useSelector((state) => state.tabs.dragging);
  const initialPos = useSelector((state) => state.tabs.initialPos);
  const initialClick = useSelector((state) => state.tabs.initialClick);
  const initialIndex = useSelector((state) => state.tabs.initialIndex);
  const lockedTranslateX = useSelector((state) => state.tabs.lockedTranslateX);
  const rect = useSelector((state) => state.tabs.rect);
  const tabs = useSelector((state) => state.tabs.tabs);
  const leftOffset = useSelector((state) => state.tabs.leftOffset);
  let activeIndex = tabs.findIndex((tab) => tab.id == dragging);

  var isDragging = dragging == id;
  var rectDOM = tabRef.current ? tabRef.current.getBoundingClientRect() : false;

  // Calculate tab position
  var translateX = 0;

  if (isDragging) {
    // Limit to move only inside tabs area
    var rectLeft = rect.left - initialIndex * 1 - 1;
    var rectRight = windowSize.width - rect.right;
    var rectHalf = rect.width / 2;
    var windowWidth = windowSize.width;
    
    // Dragging position
    translateX = docX - initialClick;
  }

  return (
    <>
      <a
        ref={tabRef}
        onMouseDown={(e) => {
          var isCloseButton = e.target.closest(".closeButton");
          if (isCloseButton) return;

          if (rectDOM) {
            // Update rect
            let rect = JSON.parse(JSON.stringify(rectDOM));
            dispatch(setRect(rect));
          }
          dispatch(setDragging(id));
          dispatch(setInitialPos(tabRef.current.getBoundingClientRect().x));
          dispatch(setInitialClick(docX));
          dispatch(setInitialIndex(index));
          history.push(href);
        }}
        onMouseUp={() => setDragging(false)}
        css={css`
          display: flex;
          align-items: center;
          width: auto;
          text-decoration: none;
          color: ${colors.blackRussian};
          font-weight: bold;
          font-size: 14px;
          line-height: 14px;
          background: ${isActive ? "#fff" : colors.lightGray};
          padding: ${margin * 2}px;
          z-index: 1;
          border: 1px solid ${colors.blackRussian};
          border-bottom: 0;
          border-radius: ${borderRadius}px ${borderRadius}px 0 0;
          min-width: 140px;
          user-select: none;
          -webkit-user-drag: none;
          text-decoration: none;
          opacity: 1;
          transform: translateX(${translateX}px);
          position: absolute;
          left: calc(${index * 140}px - ${index * 1}px);
          top: -38px;

          ${isDragging &&
          css`
            left: calc(${initialIndex * 140}px - ${index * 1}px);
          `}

          ${!isDragging &&
          css`
            transition: all 0.2s ease-in-out;
          `}

          ${isActive &&
          css`
            z-index: 2;
            padding-bottom: ${config[containerSize.display].margin * 2 + 1}px;
            margin-bottom: -1px;
          `}
        `}
      >
        <Icon>
          <Square />
        </Icon>
        {props.children}
        {href && <CloseButton id={id} href={href} index={index} />}
      </a>
      {isDragging && (
        <div
          css={css`
            width: ${tabRef.current ? rect.width : 140}px;
            margin-right: -1px;
          `}
        />
      )}
    </>
  );
};

export default Tab;
