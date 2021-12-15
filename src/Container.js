import React, { useRef, useEffect } from "react";
import { useIsomorphicLayoutEffect } from "react-use";
import { css } from "@emotion/react";
import useContainerSize from "./hooks/useContainerSize";
import { useMouse } from "react-use";
import { useAppSelector, useAppDispatch } from "./hooks";
import { setContainer } from "./store/slices/container";
import { setMouse } from "./store/slices/mouse";

var Container = ({ ...props }) => {
  const dispatch = useAppDispatch();
  const containerRef = useRef(null);
  const containerSize = useContainerSize(containerRef);
  const container = useAppSelector((store) => store.container);
  const mouse = useMouse(containerRef);

  useIsomorphicLayoutEffect(() => {
    dispatch(setContainer(containerSize));
  }, [containerSize, dispatch]);

  useEffect(() => {
    dispatch(setMouse(mouse));
    window.mouse = mouse;
  }, [dispatch, mouse]);

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
