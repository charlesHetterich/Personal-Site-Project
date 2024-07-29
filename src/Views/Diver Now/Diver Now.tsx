import React from "react";
import { withStyles, Box } from "@material-ui/core";

import { Body, Header, Image } from "../../Util/Components";
import gif1 from "./Assets/dn1.gif";

export const DiverNow: React.FunctionComponent = () => {
  return (
    <Container>
      <Header
        title="Diver Now"
        links={[
          {
            text: "Website",
            href: "https://www.divernowapp.com/",
          },
          {
            text: "Instagram",
            href: "https://www.instagram.com/divernowapp/",
          },
        ]}
        color="#ff6463"
      />
      <Body>
        Diver Now is an app that I was the freelance iOS & backend developer for. 
        Our client, Peter, wanted us to deliver the MVP
        of a social media app for scuba divers. Members can make posts anywhere on the
        world map so that other members can see pictures from their dive and
        then know exactly where to go if they want a similar experience!
      </Body>
      <Image src={gif1} displayType="mobile" />
      <Body>
        The app was developed natively in Swift, and the backend leverages AWS services
        like S3 and EC2.
      </Body>
    </Container>
  );
};

const Container = withStyles((theme) => ({
  root: {},
}))(Box);
