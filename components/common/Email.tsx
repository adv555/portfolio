import React from "react";
import styled from "styled-components";
import { email } from "@/data/config";
import { Side } from "@/components/common";

type EmailProps = {
  isHome: boolean;
};

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: #00c7ff;
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transform: translateY(-3px);
      color: #00c7ff;
    }
  }
`;

const Email = ({ isHome }: EmailProps) => (
  <Side isHome={isHome} orientation="right">
    <StyledLinkWrapper>
      <a href={`mailto:${email}`}>{email}</a>
    </StyledLinkWrapper>
  </Side>
);

export default Email;
