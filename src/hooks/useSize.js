import React from "react";
import useResizeObserver from "@react-hook/resize-observer";
import { useIsomorphicLayoutEffect } from "react-use";

const useSize = (target) => {
  const [size, setSize] = React.useState();

  useIsomorphicLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect());
  }, [target]);

  // Where the magic happens
  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  return size;
};

export default useSize;
