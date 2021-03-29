import React from "react";
import styled from "@emotion/styled";
import CloseIcon from "../../Icons/Close";

var CloseButton = (props) => (
  <div {...props}>
    <CloseIcon/>
  </div>
);

var StyledCloseButton = styled(CloseButton)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`

export default StyledCloseButton