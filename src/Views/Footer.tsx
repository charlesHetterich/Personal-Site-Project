import React from "react";
import { IconButton, withStyles, Box } from "@material-ui/core";

import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer: React.FunctionComponent = () => {
  return <Wrapper></Wrapper>;
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
  root: {},
}))(Box);
