import React, { useEffect, useRef, useState } from "react";
import { css, jsx } from "@emotion/react";
import arrayMove from "array-move";
import Header from "./Header";
import Container from "./Container";
import ContentWrapper from "./ContentWrapper";
import GlobalStyle from "./Page/GlobalStyle";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDragging, setRect, setTabs } from "./store/slices/tabs";
import { setSize } from "./store/slices/window";
import useWindowSize from "./hooks/useWindowSize";
import { setWindowSize } from "./store/slices/window";

const Page = ({ children, containerRef, ...props }) => {
  const dispatch = useDispatch();
  const dragging = useSelector((state) => state.tabs.dragging);
  const tabs = useSelector((state) => state.tabs.tabs);
  const [tabOffset, setTabOffset] = useState(0);
  const windowSize = useWindowSize();
  var initialIndex = useSelector((state) => state.tabs.initialIndex);
  var initialClick = useSelector((state) => state.tabs.initialClick);
  // var { docX } = useSelector((state) => state.mouse);
  var { docX } = window.mouse ? window.mouse : 0;

  // Update window state with size
  useEffect(() => {
    dispatch(setWindowSize(windowSize));
  }, [windowSize]);

  // Object with tabs refs (id => ref)
  var tabRefs = {
    1: useRef(null),
    2: useRef(null),
    3: useRef(null),
    4: useRef(null),
    5: useRef(null),
  };

  var activeTabRef = dragging ? tabRefs[dragging] : false;
  if (activeTabRef) {
    var rectDOM = activeTabRef.current
      ? activeTabRef.current.getBoundingClientRect()
      : false;
  }

  return (
    <Router>
      <div
        css={css``}
        onMouseLeave={() => dispatch(setDragging(false))}
        onMouseUp={() => dispatch(setDragging(false))}
        onDragEnd={() => dispatch(setDragging(false))}
      >
        <GlobalStyle />
        <Container
          onMouseMove={() => {
            if (rectDOM) {
              // console.log(rectDOM.left)
            }
            if (dragging && rectDOM) {
              // Update rect
              let rect = JSON.parse(JSON.stringify(rectDOM));
              dispatch(setRect(rect));

              // Move tabs
              let activeIndex = tabs.findIndex((tab) => tab.id === dragging);
              var distance = docX - initialClick;
              let tabWidth = rect.width;
              var tabCount = distance / tabWidth;
              var direction =
                Math.sign(tabCount) < 0
                  ? parseInt(tabCount - 0.5)
                  : parseInt(tabCount + 0.5);
              var calculatedIndex = initialIndex + direction;
              if (activeIndex != calculatedIndex && calculatedIndex >= 0) {
                dispatch(
                  setTabs(arrayMove(tabs, activeIndex, calculatedIndex))
                );
              }
            }
          }}
        >
          <Header
            windowSize={windowSize}
            dragging={[dragging, setDragging]}
            tabOffset={[tabOffset, setTabOffset]}
            tabRefs={tabRefs}
          />
          <ContentWrapper>{children}</ContentWrapper>
        </Container>
      </div>
    </Router>
  );
};

export default Page;
