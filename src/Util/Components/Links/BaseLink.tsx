/* eslint-disable react/jsx-pascal-case */

import React from "react";
import { Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import { VariantType, LinkType, LinkStyle, LinkFlags } from "../../Types";

export const BaseLink: React.FunctionComponent<{
  variant?: VariantType;
  href: string;
  downloadName?: string;
  classes?: { root: string };
  linkType: LinkType;
}> = ({
  variant = "body1",
  href,
  downloadName,
  classes,
  linkType,
  children,
}) => {
  return linkType === "internal" ? (
    <Link
      variant={variant}
      component={RouterLink}
      to={href}
      className={classes?.root}
    >
      {children}
    </Link>
  ) : (
    <Link
      download={downloadName}
      href={linkType === "download" ? href : undefined}
      className={classes?.root}
      variant={variant}
      onClick={
        linkType === "external"
          ? () => {
              // open page in new tab
              window.open(href, "_blank");
            }
          : undefined
      }
    >
      {children}
    </Link>
  );
};
