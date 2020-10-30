/* eslint-disable react/jsx-pascal-case */
//    ^ do this so that we can get away with our _xX components

import React from "react";
import { withStyles, Typography } from "@material-ui/core";

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
  classes?: { root: string };
}> = ({ classes, children }) => {
  return (
    <_subTitle className={classes?.root} variant="h2">
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
