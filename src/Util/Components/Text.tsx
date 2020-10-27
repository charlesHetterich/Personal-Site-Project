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

const _subHeader = withStyles((theme) => ({
  root: {
    marginBottom: 25,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 0,
    },
  },
}))(Typography);
export const SubHeader: React.FunctionComponent = ({ children }) => {
  return <_subHeader variant="h2">{children}</_subHeader>;
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
