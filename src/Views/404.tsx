import React from "react";

import { withStyles, Box } from "@material-ui/core";

import { CustomLink, SubTitle } from "../Util/Components";

export const Lost404: React.FunctionComponent = () => {
  return (
    <Container>
      <SubTitle>Hello traveler, it seems that you have lost your way.</SubTitle>
      <CustomLink
        href="/"
        color="#ff6463"
        linkType="internal"
        linkStyle="filled"
      >
        Home
      </CustomLink>
    </Container>
  );
};

const Container = withStyles((theme) => ({
  root: {},
}))(Box);
