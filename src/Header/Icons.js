import React from "react";
import { css } from "@emotion/react";
import Link from "./Link";
import InstagramIcon from "../Icons/Instagram";
import GithubIcon from "../Icons/Github";
import EmailIcon from "../Icons/Email";

var Icons = ({ ...props }) => (
  <div
    css={css`
      display: flex;
      justify-content: space-between;
      margin-left: auto;
      margin-bottom: 10px;

      @media screen and (min-width: 991px) {
        margin-right: 15px;
      }
    `}
  >
    <Link href="mailto:lucas.kurse@hotmail.com" target="_blank">
      <EmailIcon width={20} />
    </Link>
    <Link href="https://www.instagram.com/kuurse/" target="_blank">
      <InstagramIcon width={20} />
    </Link>
    <Link href="https://github.com/iamkrs" target="_blank">
      <GithubIcon width={20} />
    </Link>
  </div>
);

export default Icons;
