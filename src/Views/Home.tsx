import React from "react";
import { withStyles, Box } from "@material-ui/core";

import {
  MainLinkSection,
  Title as _title,
  Body,
  SubTitle as _subTitle,
  CustomArticleComponents,
  Image,
  MediaLinks,
} from "../Util/Components";

import my_photo from "../Assets/me.jpeg";

import ocai_media from "./Assets/ocai_ltd/multi_person.gif";
import soma_media from "./Soma/Assets/soma2.gif";
import pencil_media from "./Pencil The Game/Assets/pencil1.gif";
import pcn_media from "../Assets/pcn_figure.png";

const { InlineLink } = CustomArticleComponents({
  inlineColor: "#8763ff",
});

export function Home() {
  return (
    <Container>
      <Profile>
        <Image
          src={my_photo}
          displayType="regular"
          outerStyle={{ alignItems: "normal" }}
          innerStyle={{
            width: 200,
            borderRadius: 2,
            borderTopRightRadius: 30,
            overflow: "hidden",
          }}
        />
        <TextContent>
          <Header>Charles Hetterich</Header>
          <Body>
            Hi! I'm Charles. I received my Bachelors in Computer Science from
            the University at Buffalo, and my Masters in Data Science from UT
            Austin. I enjoy entrepreneurship and designing novel solutions to
            problems I am passionate about.
          </Body>
          <Body>
            Recently I have been most interested in artificial intelligence, as
            well as decentralized computing/governance platforms.
          </Body>
        </TextContent>
      </Profile>
      <MediaLinks 
        content={[
          { src: ocai_media, link: "/ocai-ltd" },
          { src: pcn_media, link: "https://arxiv.org/abs/2309.12996", scale: 0.8 },
          { src: soma_media, link: "/soma", scale: 1.5 },
          { src: pencil_media, link: "/pencil-the-game" },
        ]}
      />
      <MainLinkSection
        title="Previous Work"
        color="#f58b45"
        content={[
          { text: "OCAI LTD", link: "/ocai-ltd" },
          { text: "E Source", link: "/esource" },
          // { text: "Teaching", link: "/teaching" },
          { text: "Table", link: "/table" },
          { text: "Dell Medical", link: "/dell-medical" },
          { text: "PA Joe", link: "/pa-joe" },
          { text: "Diver Now", link: "/diver-now" },
          { text: "MBMS", link: "/mbms" },
        ]}
      />
      <MainLinkSection
        title="Older Things"
        color="#8763ff"
        content={[
          { text: "SOMA", link: "/soma" },
          { text: "Pencil The Game", link: "/pencil-the-game" },
          { text: "Game Changer", link: "/game-changer" },
          { text: "Backyard Blitz", link: "/backyard-blitz" },
        ]}
      />
      <MainLinkSection
        title=". . ."
        color="#00d688"
        content={[
          { text: "Contact", link: "/contact" },
          // { text: "Music", link: "/music", flags: ["inactive"] },
          // { text: "Podcast", link: "/podcast" },
          // { text: "Recipes", link: "/recipes", flags: ["inactive"] },
          // {
          //   text: "Travel Photos",
          //   link: "/travel-photos",
          //   flags: ["inactive"],
          // },
          {
            text: "Resume",
            link: require("../Assets/charles_resume_8_24.pdf"),
            linkType: "external",
          },
        ]}
      />
    </Container>
  );
}

const Profile = withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    [theme.breakpoints.down(550)]: {
      flexDirection: "column",
    },
  },
}))(Box);

const TextContent = withStyles((theme) => ({
  root: {
    marginLeft: 20,
  },
}))(Box);

const Container = withStyles((theme) => ({
  root: {},
}))(Box);

const Header = withStyles((theme) => ({
  root: {
    marginBottom: 20,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 25,
    },
  },
}))(_title);
