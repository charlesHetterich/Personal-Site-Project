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
  root: { marginTop: 200 },
}))(Box);

const StyledLink = withStyles((theme) => ({
  root: {
    marginRight: "10%",
    fontSize: 25,
    opacity: 0.7,
    cursor: "pointer",
    "&:hover": {
      opacity: 1,
    },
    transition: "opacity 0.2s",
  },
}))(Link);
