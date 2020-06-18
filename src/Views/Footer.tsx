import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { IconButton, withStyles } from "@material-ui/core";

export const Footer: React.FunctionComponent = () => {
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
  return (
    <Link color="primary">
      <FontAwesomeIcon href={link} icon={icon} />
    </Link>
  );
};
const Link = withStyles((theme) => ({
  root: {
    marginRight: "5%",
    transition: "color 0.25s" /* For modern browsers */,
  },
}))(IconButton);

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
