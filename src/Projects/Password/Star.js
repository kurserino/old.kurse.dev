import { css } from "@emotion/react";

var Svg = ({ containerSize, ...props }) => (
  <svg
    css={css`
      float: right;
      position: absolute;
      width: 16%;
      right: 10%;
      bottom: 17%;
    `}
    {...props}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 131 131"
    enableBackground="new 0 0 1442.4 683.3"
  >
    <defs />
    <path
      fill="#fff"
      d="M.452637 45.6242L39.3336 43.7687 33.5292 5.28401 62.3301 31.4658 85.4426.149902 87.2983 39.0247l38.4857-5.8036-26.1809 28.7964 31.3209 23.1087-38.8809 1.8502 5.8045 38.4846-28.801-26.1764-23.1124 31.3164-1.8558-38.8753-38.48556 5.8036L31.7736 68.7277.452637 45.6242z"
    />
  </svg>
);

export default Svg;
