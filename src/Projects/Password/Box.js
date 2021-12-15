import { useRef } from "react";
import { css } from "@emotion/react";
import useSize from "../../hooks/useSize";
import colors from "../../colors";

var Box = ({ containerSize, ...props }) => {
  var boxRef = useRef();
  var size = useSize(boxRef);
  var width = size ? size.width : 0;

  return (
    <div
      css={css`
        float: left;
        position: absolute;
        width: 100%;
        height: ${width * 0.19}px;
        background: ${colors.blackRussian};
        bottom: 0;

        @media screen and (min-width: 991px) {
        }
      `}
      ref={boxRef}
      {...props}
    ></div>
  );
};

export default Box;
