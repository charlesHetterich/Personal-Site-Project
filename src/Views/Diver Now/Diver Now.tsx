import React from "react";
import { withStyles, Box } from "@material-ui/core";

import { Body, Header } from "../../Util/Components";

export const DiverNow: React.FunctionComponent = () => {
  return (
    <Container>
      <Header title="Diver Now" links={[]} color="#ff6463" />
      <Body>This is Diver Now</Body>
    </Container>
  );
};

const Container = withStyles((theme) => ({
  root: {},
}))(Box);
