import React from "react";
import { withStyles, Box } from "@material-ui/core";

import { Body, Header } from "../Util/Components";

export const Podcast: React.FunctionComponent = () => {
  return (
    <Container>
      <Header
        title="Podcast"
        links={[
          {
            text: "Spotify",
            href: "https://open.spotify.com/show/5Lh4pFQ1BqSC56Uzzz5l7B",
          },
          {
            text: "Apple Podcasts",
            href: "https://podcasts.apple.com/us/podcast/tlc/id1497935161?uo=4",
          },
          {
            text: "Anchor",
            href: "https://anchor.fm/tastylittleconspiracies",
          },
          {
            text: "Amazon Music",
            href:
              "https://music.amazon.com/podcasts/9959102f-f82b-49b2-bb3d-0264d49fa3ee/TLC",
          },
        ]}
        color="#ff6463"
      />
      <Body>
        <i>TLC</i> is a podcast by my friends Naomi, Marie, & myself. It's
        loosely meant to be a conspiracy theory podcast, but more times than not
        we get sidetracked!
      </Body>
      <Body>
        We started off recording on the Wellington radio when we were studying
        abroad in New Zealand. After leaving New Zealand we started recording
        over Skype, releasing an episode about once per month. Going from a
        radio station to Skype has been a bit of a downgrade but it's still been
        a great experience!
      </Body>
    </Container>
  );
};

const Container = withStyles((theme) => ({
  root: {},
}))(Box);
