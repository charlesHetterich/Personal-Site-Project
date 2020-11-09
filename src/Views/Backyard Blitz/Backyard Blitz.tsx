import React from "react";
import { withStyles, Box } from "@material-ui/core";

import { Image, Body, Header } from "../../Util/Components";

import gif2 from "./Assets/backyardBlitz2.gif";

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
      <Image src={gif2} />
    </Container>
  );
};

const Container = withStyles((theme) => ({
  root: {},
}))(Box);
