import React from "react";
import { withStyles, Box } from "@material-ui/core";

import { Body, Header, Image } from "../../Util/Components";
import gif1 from "./Assets/dn1.gif";

export const DiverNow: React.FunctionComponent = () => {
  return (
    <Container>
      <Header title="Diver Now" links={[]} color="#ff6463" />
      <Body>This is Diver Now</Body>
      <Image src={gif1} displayType="mobile" />
    </Container>
  );
};

const Container = withStyles((theme) => ({
  root: {},
}))(Box);
