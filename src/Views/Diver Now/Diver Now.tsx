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
            text: "App Store",
            href: "https://apps.apple.com/us/app/diver-now-app/id1526710183",
          },
          {
            text: "Google Play",
            href:
              "https://play.google.com/store/apps/details?id=com.DiverNow.DiverNowApp",
          },
          {
            text: "Instagram",
            href: "https://www.instagram.com/divernowapp/",
          },
        ]}
        color="#ff6463"
      />
      <Body>
        Diver Now is an app that I am the freelance iOS & backend developer for.
      </Body>
      <Image src={gif1} displayType="mobile" />
      <Body>
        The app is a social media for scuba divers. Members can make posts on a
        world map so that other members can see pictures from their dive and
        then know exactly where to go if they want a similar dive!
      </Body>
    </Container>
  );
};

const Container = withStyles((theme) => ({
  root: {},
}))(Box);
