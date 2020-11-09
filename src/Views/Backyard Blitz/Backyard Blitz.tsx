import React from "react";
import { withStyles, Box } from "@material-ui/core";

import {
  CustomArticleComponents,
  Image,
  SubTitle,
  Body,
  Header,
  Emoji,
} from "../../Util/Components";

import gif1 from "./Assets/backyardBlitz1.gif";
import gif2 from "./Assets/backyardBlitz2.gif";

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
        Sit back, relax, & enjoy the ASMR of drawing with a pencil{" "}
        <Emoji symbol="😌" />. Use the pencil to draw along the outline to get a
        high score. Be careful not to break the tip, and make sure sure you draw
        quick enough to outrun the red bar!
      </Body>
      <Image src={gif2} />
    </Container>
  );
};

const Container = withStyles((theme) => ({
  root: {},
}))(Box);
