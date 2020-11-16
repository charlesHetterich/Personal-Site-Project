/* eslint-disable react/jsx-pascal-case */

import React from "react";
import { withStyles } from "@material-ui/core";
import { BaseLink } from "./Links/BaseLink";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { VariantType, LinkType, LinkStyle, LinkFlags } from "../Types";

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
}))(BaseLink);
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
}))(BaseLink);

export const CustomLink: React.FunctionComponent<{
  variant?: VariantType;
  href: string;
  downloadName?: string;
  classes?: { root: string };
  color: string;
  linkType: LinkType;
  linkStyle: LinkStyle;
  flags?: LinkFlags;
}> = ({
  variant = "body1",
  href,
  downloadName,
  classes,
  color: bgColor,
  linkType,
  linkStyle,
  flags = [],
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
            color: flags.includes("inactive") ? "#ffffff44" : undefined,
          },
        }))(_filledLink);

  return (
    <ThisLink
      classes={classes}
      downloadName={downloadName}
      href={href}
      variant={variant ?? "body1"}
      linkType={linkType}
    >
      {children}
    </ThisLink>
  );
};

const _backButton = withStyles((theme) => ({
  root: {
    marginBottom: 120,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 75,
    },
  },
}))(CustomLink);
export const BackButton: React.FunctionComponent<{ color: string }> = ({
  color,
}) => {
  return (
    <_backButton href="/" color={color} linkStyle="filled" linkType="internal">
      <FontAwesomeIcon icon={faArrowLeft} />
    </_backButton>
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
