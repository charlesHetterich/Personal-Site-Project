import React from "react";

import { withStyles, Box } from "@material-ui/core";

import { CustomLink, SubHeader } from "../Util/Components";

export const Lost404: React.FunctionComponent = () => {
  return (
    <Container>
      <SubHeader>
        Hello traveler, it seems that you have lost your way.
      </SubHeader>
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
