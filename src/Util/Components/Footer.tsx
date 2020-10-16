import React from "react";
import { withStyles, Box, Link } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

import {
  faGithub,
  faGitlab,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Footer: React.FunctionComponent = () => {
  return (
    <Container>
      <FooterLink i={faGithub} link="https://github.com/charlesHetterich" />
      <FooterLink i={faGitlab} link="https://gitlab.com/cHetterich" />
      <FooterLink
        i={faLinkedinIn}
        link="https://www.linkedin.com/in/chetterich/"
      />
      <FooterLink i={faTwitter} link="https://twitter.com/Chazz_Edward" />
      <FooterLink
        i={faInstagram}
        link="https://www.instagram.com/charleshetterich/"
      />
    </Container>
  );
};

const FooterLink: React.FunctionComponent<{
  i: IconDefinition;
  link: string;
}> = ({ i, link }) => {
  return (
    <StyledLink
      onClick={() => {
        window.open(link, "_blank");
      }}
    >
      <FontAwesomeIcon icon={i} />
    </StyledLink>
  );
};

const Container = withStyles((theme) => ({
  root: {
    marginTop: 200,
    marginBottom: 25,
    [theme.breakpoints.down("sm")]: {
      marginTop: 100,
      textAlign: "center",
    },
  },
}))(Box);

const StyledLink = withStyles((theme) => ({
  root: {
    marginRight: "14%",
    fontSize: 25,
    opacity: 0.7,
    cursor: "pointer",
    "&:hover": {
      opacity: 1,
    },
    transition: "opacity 0.2s",
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,

      // distribute margin on left and right side so we are actually centered
      marginLeft: "7%",
      marginRight: "7%",
    },
    [theme.breakpoints.down(450)]: {
      fontSize: 15,
    },
  },
}))(Link);
