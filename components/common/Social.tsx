import React from "react";
import styled from "styled-components";
import { Side } from "@/components/common";
import { Icon } from "@/components/icons";
import { socialMedia } from "@/data/config";

type SocialProps = {
  isHome: boolean;
};

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: 350px;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: #00c7ff;
  }

  li {
    height: 25px;
    margin-bottom: 25px;
    &:last-of-type {
      margin-bottom: 70px;
    }

    a {
      padding: 10px;

      /* &:hover,
      &:focus {
        transform: translateY(-5px);
        color: #00c7ff;
      } */

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const Social = ({ isHome }: SocialProps) => (
  <Side isHome={isHome} orientation="left">
    <StyledSocialList>
      { socialMedia?.map(({ url, name }) => (
          <li key={name}>
            <a
              href={url}
              aria-label={name}
              target="_blank"
              rel="noreferrer"
              className="hover:transform hover:translate-y-6 hover:text-fun-pink"
            >
              <Icon name={name} />
            </a>
          </li>
        ))}
    </StyledSocialList>
  </Side>
);

export default Social;
