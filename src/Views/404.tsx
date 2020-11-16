import React from "react";

import { withStyles, Box } from "@material-ui/core";

import { CustomLink, Title, SubTitle } from "../Util/Components";

export const Lost404: React.FunctionComponent = () => {
  return (
    <Container>
      <StyledTitle>
        <i>404</i>
      </StyledTitle>
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

const StyledTitle = withStyles((theme) => ({
  root: {
    marginBottom: 50,
  },
}))(Title);
