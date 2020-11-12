import React from "react";
import { withStyles, Box } from "@material-ui/core";

import { Body, Image, Header } from "../../Util/Components";

import img1 from "./Assets/gc1.png";

export const GameChanger: React.FunctionComponent = () => {
  return (
    <Container>
      <Header
        title="Game Changer"
        links={[
          {
            text: "Repository",
            href: "https://github.com/charlesHetterich/Game-Changer",
          },
        ]}
        color="#ff6463"
      />
      <Body>
        <i>Game Changer</i> is a Swift Playground new developers can use to
        begin to understand the basic concepts of coding. There are 3 sections:
        Patterns, Snake, and Tetris. We build each section in a modular fashion
        to make it as easy as possible for developers to apply clear changes and
        see those immediately.
      </Body>
      <Image src={img1} />
      <Body>
        I built this originally to get a scholarship to go to Apple's WWDC
        event. Now when I have friends who have an interest in coding, if they
        have a mac, this is a quick and easy way for me to help them get
        started.
      </Body>
    </Container>
  );
};

const Container = withStyles((theme) => ({
  root: {},
}))(Box);
