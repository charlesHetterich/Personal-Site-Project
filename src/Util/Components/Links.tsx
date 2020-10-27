import React from "react";
import { Link, withStyles } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { VariantType, LinkType, LinkStyle } from "../Types";

const _filledLink = withStyles((theme) => ({
  root: {
    margin: 15,
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    display: "inline-block",
    boxShadow: "5px 5px #333333ff",
    color: theme.palette.background.default,
    "&:focus, &:hover, &:visited, &:link, &:active": {
      textDecoration: "none",
    },
    "&:hover": {
      boxShadow: "10px 10px #333333ff",
    },
    [theme.breakpoints.down("sm")]: {
      margin: 10,
    },
    transition: "0.2s box-shadow ",
    cursor: "pointer",
  },
}))(Link);
const _underlinedLink = withStyles((theme) => ({
  root: {
    fontWeight: 800,
    borderBottom: "3px solid",
    "&:focus, &:hover, &:visited, &:link, &:active": {
      textDecoration: "none",
    },
    transition: "background-color 0.2s",
    cursor: "pointer",
  },
}))(Link);

export const CustomLink: React.FunctionComponent<{
  variant?: VariantType;
  href?: string;
  color: string;
  linkType: LinkType;
  linkStyle: LinkStyle;
}> = ({
  variant = "body1",
  href,
  color: bgColor,
  linkType,
  linkStyle,
  children,
}) => {
  // Choose custom styling based on link type
  const ThisLink =
    linkStyle === "underline"
      ? withStyles((theme) => ({
          root: {
            color: bgColor,
            borderBottomColor: "#333333ff",
            "&:hover": {
              backgroundColor: bgColor + "33",
            },
          },
        }))(_underlinedLink)
      : withStyles((theme) => ({
          root: {
            backgroundColor: bgColor,
          },
        }))(_filledLink);

  return (
    <ThisLink
      variant={variant ?? "body1"}
      onClick={() => {
        // Open page in this tab or a new tab
        window.open(href, linkType === "external" ? "_blank" : "_self");
      }}
    >
      {children}
    </ThisLink>
  );
};

export const BackButton: React.FunctionComponent<{ color: string }> = ({
  color,
}) => {
  return (
    <CustomLink href="/" color={color} linkStyle="filled" linkType="internal">
      <FontAwesomeIcon icon={faArrowLeft} />
    </CustomLink>
  );
};

// Create custom set up links for each article
export function CustomArticleComponents({
  inlineColor,
}: {
  inlineColor: string;
}): {
  InlineLink: React.FunctionComponent<{ href: string; type: LinkType }>;
} {
  return {
    InlineLink: ({ href, type, children }) => {
      return (
        <CustomLink
          href={href}
          color={inlineColor}
          linkStyle="underline"
          linkType={type}
        >
          {children}
        </CustomLink>
      );
    },
  };
}
