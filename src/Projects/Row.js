import { css } from "@emotion/react";

var Row = ({ containerSize, ...props }) => {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;

        @media screen and (min-width: 991px) {
          flex-direction: row;
        }
      `}
      {...props}
    ></div>
  );
};

export default Row;
