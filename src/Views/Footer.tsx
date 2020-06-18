import React from "react";
import { IconButton, withStyles, Box } from "@material-ui/core";

import {
  faTwitter,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Text } from "../Util/Components";

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
      <Label variant="body1" color="textPrimary">
        If there’s anything you’d like to talk about- get in touch!
      </Label>
    </Wrapper>
  );
};

/* Let's us open the link in a new tab */
const navigateToExternalUrl = (url: string, shouldOpenNewTab: boolean = true) =>
  shouldOpenNewTab ? window.open(url, "_blank") : (window.location.href = url);
const LinkButton: React.FunctionComponent<{
  icon: IconDefinition;
  link: string;
}> = ({ icon, link }) => {
  return (
    <Link
      edge="start"
      onClick={() => {
        navigateToExternalUrl(link);
      }}
    >
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
};

const Link = withStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    marginRight: "5vw",
    transition: "color 0.25s" /* For modern browsers */,
  },
}))(IconButton);

const Wrapper = withStyles((theme) => ({
  root: {
    display: "flex",
    padding: 50,
    paddingLeft: "8vw",
    paddingRight: "8vw",
    [theme.breakpoints.up("md")]: {
      alignItems: "center",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      alignItems: "flex-start",
    },
  },
}))(Box);

const LinksContainer = withStyles((theme) => ({
  root: {
    flex: 1,
    display: "flex",
    justifyContent: "left",
  },
}))(Box);

const Label = withStyles((theme) => ({
  root: {
    flex: 1,
    fontSize: "0.75em",
    fontFamily: "'Roboto Slab', serif",
    fontWeight: 400,
    [theme.breakpoints.down("md")]: {
      marginBottom: 30,
    },
  },
}))(Text);
