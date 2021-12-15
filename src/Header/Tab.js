import React from "react";
import { useRouter } from "next/router";
import { useAppSelector, useAppDispatch } from "../hooks";
import { css } from "@emotion/react";
import Icon from "./Tab/Icon";
import config from "../config";
import colors from "../colors";
import CloseButton from "./Tab/CloseButton";
import Square from "../Icons/Square";
import {
  // setInitialPos,
  setDragging,
  setInitialClick,
  setInitialIndex,
  setRect,
  setOpen,
} from "../store/slices/tabs";

var Tab = ({ tabRefs, href, id, index, ...props }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  var tabRef = tabRefs[id];
  var path = router.pathname;
  var isProjects = path === "/" || path.startsWith("/projects");
  var isActive = href === "/" ? isProjects : path.startsWith(href);
  var containerSize = useAppSelector((state) => state.container);
  var margin = config[containerSize.display].margin;
  var borderRadius = config[containerSize.display].borderRadius;

  const mouse = useAppSelector((state) => state.mouse);
  const { docX } = mouse;

  const dragging = useAppSelector((state) => state.tabs.dragging);
  const initialClick = useAppSelector((state) => state.tabs.initialClick);
  const initialIndex = useAppSelector((state) => state.tabs.initialIndex);

  const rect = useAppSelector((state) => state.tabs.rect);

  var isDragging = dragging === id;
  var rectDOM = tabRef.current ? tabRef.current.getBoundingClientRect() : false;

  // Calculate tab position
  var translateX = 0;

  if (isDragging && docX) {
    // Dragging position
    translateX = docX - initialClick;
  }

  var isMobile = containerSize.display === "mobile";

  if (!isDragging) {
    console.log("pickles");
  }

  return (
    <>
      <div
        ref={tabRef}
        onMouseDown={(e) => {
          e.preventDefault();
          var isCloseButton = e.target.closest(".closeButton");
          if (isCloseButton) return;

          if (rectDOM) {
            // Update rect
            let rect = JSON.parse(JSON.stringify(rectDOM));
            dispatch(setRect(rect));
          }

          dispatch(setDragging(id));
          // dispatch(setInitialPos(tabRef.current.getBoundingClientRect().x));
          dispatch(setInitialClick(docX));
          dispatch(setInitialIndex(index));
          router.push(href, undefined, { shallow: true });

          if (isMobile) dispatch(setOpen(false));
        }}
        onMouseUp={() => setDragging(false)}
        css={css`
          display: flex;
          font-size: 2rem;
          color: ${colors.black};
          text-decoration: none;
          transition: color 0.3s linear;
          font-size: 30px;
          text-align: center;
          padding: 10px 0;
          cursor: pointer;

          @media screen and (min-width: 991px) {
            align-items: center;
            width: auto;
            text-decoration: none;
            color: ${colors.blackRussian};
            font-weight: bold;
            font-size: 14px;
            line-height: 14px;
            background: ${isActive ? "#fff" : colors.lightGray};
            padding: ${margin * 2}px;
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
            docX &&
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
          }
        `}
      >
        {!isMobile && (
          <Icon>
            <Square />
          </Icon>
        )}
        <span
          css={css`
            width: 100%;
            text-align: left;
          `}
        >
          {props.children}
        </span>
        {href && !isMobile && <CloseButton id={id} href={href} index={index} />}
      </div>
      {isDragging && (
        <div
          css={css`
            width: ${tabRef.current ? rect.width : 140}px;
            margin-right: -1px;
          `}
        ></div>
      )}
    </>
  );
};

export default Tab;
