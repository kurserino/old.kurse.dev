import React from "react";
import styled from "@emotion/styled";
import Link from "./Link";
import InstagramIcon from "../Icons/Instagram";
import GithubIcon from "../Icons/Github";
import EmailIcon from "../Icons/Email";

var Icons = ({ className, spacing }) => (
  <div className={className}>
    <Link href="mailto:lucas.kurse@hotmail.com" target="_blank">
      <EmailIcon width={20}/>
    </Link>
    <Link href="https://www.instagram.com/kuurse/" target="_blank">
      <InstagramIcon width={20}/>
    </Link>
    <Link href="https://github.com/iamkrs" target="_blank">
      <GithubIcon width={20}/>
    </Link>
  </div>
);

var StyledIcons = styled(Icons)`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-bottom: 10px;
`;

export default StyledIcons;
