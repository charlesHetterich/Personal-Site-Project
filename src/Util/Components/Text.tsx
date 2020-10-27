/* eslint-disable react/jsx-pascal-case */
//    ^ do this so that we can get away with our _xX components

import React from "react";
import { withStyles, Typography } from "@material-ui/core";

const _title = withStyles((theme) => ({
  root: {
    marginBottom: 40,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 25,
    },
  },
}))(Typography);
export const Title: React.FunctionComponent = ({ children }) => {
  return <_title variant="h1">{children}</_title>;
};

const _subTitle = withStyles((theme) => ({
  root: {
    marginBottom: 25,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 0,
    },
  },
}))(Typography);
export const SubTitle: React.FunctionComponent = ({ children }) => {
  return <_subTitle variant="h2">{children}</_subTitle>;
};

const _body = withStyles((theme) => ({
  root: {
    marginBottom: 40,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 25,
    },
  },
}))(Typography);
export const Body: React.FunctionComponent = ({ children }) => {
  return <_body>{children}</_body>;
};
