import React from "react";
import { withStyles, Box } from "@material-ui/core";

import {
  MainLinkSection,
  Emoji,
  Title as _title,
  Body,
  Whisper,
  SubTitle as _subTitle,
  CustomArticleComponents,
  Image,
  MediaScroller
} from "../Util/Components";

import my_photo from "../Assets/me.jpeg";
import media1 from "../Assets/me.jpeg";
import media2 from "../Assets/me.jpeg";
import media3 from "../Assets/me.jpeg";



const { InlineLink } = CustomArticleComponents({
  inlineColor: "#8763ff",
});

export function Home() {
  const mediaItems = [
    { src: media1, url: "https://example.com/1" },
    { src: media2, url: "https://example.com/2" },
    { src: media3, url: "https://example.com/3" },
    { src: media3, url: "https://example.com/3" },
    { src: media3, url: "https://example.com/3" },
    { src: media3, url: "https://example.com/3" },
    { src: media3, url: "https://example.com/3" },
  ];

  return (
    <Container>
      <Profile>
        <Image 
          src={my_photo}
          displayType="regular"
          // outerStyle={{ borderRadius: "50%", marginBottom: "20px",  }} // Example of overriding OuterContainer styles
          outerStyle={{ alignItems: "normal" }} // Example of overriding OuterContainer styles
          innerStyle={{ width: 200, borderRadius: 2, borderTopRightRadius: 30, overflow: 'hidden' }} // Example of overriding InnerContainer styles
          />
        <TextContent>
          <Header>Charles Hetterich</Header>
          {/* <SubTitle variant="h3">
            A conglomeration of things he has done, created, or thought
          </SubTitle> */}
          <Body>
            Hi! I'm Charles.
            I recieved my Bachelors in Computer Science from the University at Buffalo, and my Masters in Data Science from UT Austin.
            I enjoy entrepreneurship and designing novel solutions to problems I am passionate about.
          </Body>
          <Body>
            Recently I have been most interested in artificial intelligence, as well as decentralized computing/governance platforms.
          </Body>
        </TextContent>
      </Profile>
      {/* <MediaScroller items={mediaItems} cornerRadius={10} height={150} /> */}
      <MainLinkSection
        title="Previous Work"
        color="#f58b45"
        // color="#D66C42"
        content={[
          { text: "OCAI LTD", link: "/ocai-ltd" },
          { text: "E Source", link: "/esource" },
          { text: "Teaching", link: "/teaching" },
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
        // color="#7153D5"
        content={[
          { text: "SOMA", link: "/soma" },
          { text: "Pencil The Game", link: "/pencil-the-game" },
          { text: "Game Changer", link: "/game-changer" },
          { text: "Backyard Blitz", link: "/backyard-blitz" },
        ]}
      />
      {/* <MainLinkSection
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
      /> */}
      <MainLinkSection
        title=". . ."
        color="#00d688"
        // color="#00AF6F"
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
            link: require("../Assets/resume_7_24.pdf"),
            linkType: "external",
          },
        ]}
      />
    </Container>
  );
}

const Profile = withStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    [theme.breakpoints.down(550)]: {
      flexDirection: 'column',
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



const SubTitle = withStyles((theme) => ({
  root: {
    marginBottom: 15,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 40,
    },
  },
}))(_subTitle);
