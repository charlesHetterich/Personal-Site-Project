import React from "react";
import { withStyles, Box } from "@material-ui/core";

import {
  Image,
  Body,
  Header,
  CustomArticleComponents,
} from "../../Util/Components";

import gif1 from "./Assets/backyardBlitz1.gif";

const { InlineLink } = CustomArticleComponents({
  inlineColor: "#8763ff",
});

export const BackyardBlitz: React.FunctionComponent = () => {
  return (
    <Container>
      <Header
        title="Backyard Blitz"
        links={[
          {
            text: "Repository",
            href: "https://github.com/charlesHetterich/backyard-blitz",
          },
          {
            text: "Download (Windows)",
            href: require("./Assets/Backyard Blitz [Windows].zip"),
            linkType: "download",
            downloadName: "Backyard Blitz (Windows)",
          },
          {
            text: "Download (Mac)",
            href: require("./Assets/Backyard Blitz [Mac].zip"),
            linkType: "download",
            downloadName: "Backyard Blitz (Mac)",
          },
        ]}
        color="#ff6463"
      />
      <Body>
        Backyard Blitz is a water gun fight shoot 'em up. Collect a new water
        gun in each new backyard you visit, and become the last kid standing in
        the neighborhood!
      </Body>
      <Image src={gif1} />
      <Body>
        I made this game with a few of my classmates in my Game Design course.
        It was the first game I've worked on with a bunch of other people. It
        was super cool being able to delegate tasks and watch as our separate
        components eventually came together to form an actual game!
      </Body>
      <Body>
        The project came out decently for the time frame we had. Obviously it
        could have been much more polished if we weren't limited on that front.
        The guns/enemies are super unbalanced and I think the artwork could use
        some fine tuning as well, but the core concept is pretty sound. The
        screen shake is a bit much, but we had discovered how easy it was to
        apply screen effects in{" "}
        <InlineLink type="external" href="https://unity.com/">
          Unity
        </InlineLink>{" "}
        so... why not.
      </Body>
    </Container>
  );
};

const Container = withStyles((theme) => ({
  root: {},
}))(Box);
