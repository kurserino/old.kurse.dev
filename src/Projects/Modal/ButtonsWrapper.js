import React from "react";
import styled from "@emotion/styled";

var ButtonsWrapper = ({ className, children }) => (
  <div className={className}>{children}</div>
);

var StyledButtonsWrapper = styled(ButtonsWrapper)`
  font-weight: bold;
  font-size: 16px;
  display: flex;
  margin-top: auto;
  flex-direction: column;
  padding-top: 30px;

  @media screen and (min-width: 991px) {
    flex-direction: row;
    align-items: center;
  }
`;

export default StyledButtonsWrapper;
