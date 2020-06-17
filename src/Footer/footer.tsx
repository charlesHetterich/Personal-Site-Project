import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMailBulk,
  IconDefinition,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "../Util/Components";
export const Footer: React.FunctionComponent = () => {
  const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    padding-left: 8vw;
    padding-right: 8vw;
    @media (min-width: 801px) {
      align-items: center;
    }
    @media (max-width: 800px) {
      flex-direction: column-reverse;
    }
  `;

  const LinksContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: left;
  `;

  const Label = styled.p`
    flex: 1;
    font-size: 0.75em;
    font-family: "Roboto Slab", serif;
    color: #424245;
    @media (max-width: 800px) {
      margin-bottom: 30px;
    }
  `;

  return (
    <Wrapper>
      <LinksContainer>
        <LinkButton
          icon={faInstagram}
          link="https://www.instagram.com/charleshetterich"
        />
        <LinkButton icon={faTwitter} link="https://twitter.com/Chazz_Edward" />
        <LinkButton
          icon={faGithub}
          link="https://github.com/charlesHetterich"
        />
        <LinkButton
          icon={faEnvelope}
          link="mailto:hetterich.charles@gmail.com"
        />
      </LinksContainer>
      <Label>if there’s anything you’d like to talk about- get in touch!</Label>
    </Wrapper>
  );
};

const LinkButton: React.FunctionComponent<{
  icon: IconDefinition;
  link: string;
}> = ({ icon, link }) => {
  const StyledLink = styled(Link)`
    color: #535357;
    padding: 5px;
    margin-right: 10%;
    &:hover {
      color: black;
    }
  `;

  return (
    <StyledLink href={link}>
      <FontAwesomeIcon icon={icon} size={"lg"}></FontAwesomeIcon>
    </StyledLink>
  );
};
