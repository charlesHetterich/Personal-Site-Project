import React from "react";
import { withStyles, Box, Typography } from "@material-ui/core";

import {
  MainLinkSection,
  Emoji,
  Title as _title,
  Body as _body,
} from "../Util/Components";

export function Home() {
  return (
    <Container>
      <Header>Charles Hetterich</Header>
      <SubTitle variant="h3">
        A conglomeration of things he has done, created, or thought
      </SubTitle>
      <Body>
        Hello <Emoji symbol="👋" />— I maintain this website in order to provide
        a better context of who I am as a professional & as a person. I also use
        this site as a corner of the web to personalize & call my own! Hope you
        enjoy your stay.
      </Body>
      <Body>
        I am a Designer & Software Developer. Currently I spend my time working
        freelance jobs, as well as on my own business ventures.
      </Body>
      <Body>
        Without further ado, here are some things! From me, to you
        <Emoji symbol="👇" />
      </Body>
      <MainLinkSection
        title="Programming Projects"
        color="#8763ff"
        content={[
          { text: "SOMA", link: "/soma" },
          { text: "Backyard Blitz", link: "/backyard-blitz" },
          { text: "Pencil The Game", link: "/pencil-the-game" },
          { text: "Game Changer", link: "/game-changer" },
        ]}
      />
      <MainLinkSection
        title="Previous Jobs"
        color="#f58b45"
        content={[
          { text: "Table", link: "/table-date" },
          { text: "MBMS", link: "/mbms" },
          { text: "Diver Now", link: "/diver-now", flags: ["inactive"] },
          { text: "PA Joe", link: "/pa-joe" },
        ]}
      />
      <MainLinkSection
        title="Design Stuff"
        color="#ff6463"
        content={[
          {
            text: "My history with design",
            link: "/my-history-with-design",
            flags: ["inactive"],
          },
          {
            text: "This website",
            link: "/this-website",
            flags: ["inactive"],
          },
          { text: "App Design", link: "/app-design", flags: ["inactive"] },
        ]}
      />
      <MainLinkSection
        title="Miscellaneous"
        color="#00d688"
        content={[
          { text: "Contact", link: "/contact" },
          { text: "Music", link: "/music", flags: ["inactive"] },
          { text: "Podcast", link: "/podcast" },
          { text: "Recipes", link: "/recipes", flags: ["inactive"] },
          {
            text: "Travel Photos",
            link: "/travel-photos",
            flags: ["inactive"],
          },
          {
            text: "Resume",
            link: require("../Assets/Resume.pdf"),
            linkType: "external",
          },
        ]}
      />
    </Container>
  );
}
const Container = withStyles((theme) => ({
  root: {},
}))(Box);

const Header = withStyles((theme) => ({
  root: {
    marginBottom: 40,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 25,
    },
  },
}))(_title);
const SubTitle = withStyles((theme) => ({
  root: {
    marginBottom: 70,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 40,
    },
  },
}))(Typography);
const Body = withStyles((theme) => ({
  root: {
    marginBottom: 40,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 25,
    },
  },
}))(_body);
