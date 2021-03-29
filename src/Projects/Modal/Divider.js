import React from "react";
import styled from "@emotion/styled";
import colors from "../../colors";

var Divider = (props) => <div {...props}></div>;

var StyledDivider = styled(Divider)`
  float: left;
  width: ${(props) => props.size}px;
  height: 1px;
  background: ${colors.black};
  margin: 20px 0;
`;

export default StyledDivider;
