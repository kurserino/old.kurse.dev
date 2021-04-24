import React from "react";
import { css, jsc } from "@emotion/react";
import { useSelector } from "react-redux";
import { Tooltip } from "react-tippy";
import { tooltipParams } from "../config.js";
import Info from "./Info";
import Area from "./Area";
import Title from "./Title";
import Text from "./Text";
import DateRange from "./DateRange";
import PartyPopper from "./PartyPopper";
import Position from "./Position";
import Company from "./Company";
import colors from "../colors";

const Work = ({ children, isLast, ...props }) => {
  return (
    <div
      css={css`
        display: flex;
        font-size: 18px;
        line-height: 20px;
        color: ${colors.blackRussian};
        flex-direction: column;

        @media screen and (min-width: 991px) {
          flex-direction: row;
        }

        @media screen and (max-width: 991px) {
          margin-bottom: 15px;
        }

        ${!isLast &&
        css`
          margin-bottom: 8px;
        `};
      `}
    >
      {children}
    </div>
  );
};

const PartyPopperWrapper = ({ children, ...props }) => {
  return (
    <div
      css={css`
        display: flex;
        margin-left: 10px;
      `}
    >
      {children}
    </div>
  );
};

const WorkExperience = ({ ...props }) => {
  const containerSize = useSelector((store) => store.container);
  const isMobile = containerSize.display == "mobile";

  return (
    <Area>
      <Title>Work experience</Title>
      <Work>
        <DateRange from="2020 JAN" to="NOW" />
        <Position>Full stack developer</Position>
        <Company>Freelancer</Company>
        {!isMobile && (
          <Tooltip title="Let's work together!" {...tooltipParams}>
            <PartyPopperWrapper>
              <PartyPopper />
              <PartyPopper isLast />
            </PartyPopperWrapper>
          </Tooltip>
        )}
      </Work>
      <Work>
        <DateRange from="2017 AUG" to="2020 JAN" />
        <Position>Frontend developer</Position>
        <Company>OctoXB</Company>
      </Work>
      <Work>
        <DateRange from="2014 SEP" to="2017 JUL" />
        <Position>Frontend developer</Position>
        <Company>Agência Magento</Company>
      </Work>
      <Work>
        <DateRange from="2013 OCT" to="2014 AUG" />
        <Position>Designer</Position>
        <Company>Agência Saru</Company>
      </Work>
      <Work>
        <DateRange from="2012 JUL" to="2013 SEP" />
        <Position>Designer</Position>
        <Company>AWIN, Animal Welfare Indicators</Company>
      </Work>
      <Work isLast>
        <DateRange from="2012 JAN" to="2020 2012" />
        <Position>Designer</Position>
        <Company>Duo Design</Company>
      </Work>
    </Area>
  );
};

export default WorkExperience;
