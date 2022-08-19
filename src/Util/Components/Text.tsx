/* eslint-disable react/jsx-pascal-case */
//    ^ do this so that we can get away with our _xX components

import React from "react";
import { withStyles, Typography } from "@material-ui/core";
import { VariantType } from "../Types";

const _title = withStyles((theme) => ({
  root: {},
}))(Typography);
export const Title: React.FunctionComponent<{ classes?: { root: string } }> = ({
  classes,
  children,
}) => {
  return (
    <_title className={classes?.root} variant="h1">
      {children}
    </_title>
  );
};

const _subTitle = withStyles((theme) => ({
  root: {
    marginBottom: 0,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 0,
    },
  },
}))(Typography);
export const SubTitle: React.FunctionComponent<{
  variant?: VariantType;
  classes?: { root: string };
}> = ({ variant = "h2", classes, children }) => {
  return (
    <_subTitle className={classes?.root} variant={variant}>
      {children}
    </_subTitle>
  );
};

const _body = withStyles((theme) => ({
  root: {
    marginBottom: 40,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 25,
    },
  },
}))(Typography);
export const Body: React.FunctionComponent<{ classes?: { root: string } }> = ({
  classes,
  children,
}) => {
  return <_body className={classes?.root}>{children}</_body>;
};

export const Whisper = withStyles((theme) => ({
  root: {
    fontSize: ".8em",
    opacity: 0.9,
    display: "inline",
    fontStyle: "italic",
  },
}))(Body);
