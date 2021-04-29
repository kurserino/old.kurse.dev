import React, { useRef, useEffect } from "react";
import { css, jsx } from "@emotion/react";
import useContainerSize from "./hooks/useContainerSize";
import { useMouse } from "react-use";
import { useSelector, useDispatch } from "react-redux";
import { setContainer } from "./store/slices/container";
import { setMouse } from "./store/slices/mouse";

var Container = ({ ...props }) => {
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const containerSize = useContainerSize(containerRef);
  const container = useSelector((store) => store.container);
  const mouse = useMouse(containerRef);

  useEffect(() => {
    dispatch(setContainer(containerSize));
  }, [containerSize]);

  useEffect(() => {
    dispatch(setMouse(mouse));
    window.mouse = mouse;
  }, [mouse]);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        max-width: ${container.maxWidth}px;
        margin: 0 auto;
        padding: 16px;

        @media screen and (min-width: 991px) {
          padding: 24px;
        }
      `}
      ref={containerRef}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default Container;
