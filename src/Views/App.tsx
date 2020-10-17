import React from "react";
import {
  ThemeProvider,
  withStyles,
  Box,
  CssBaseline,
  Typography,
} from "@material-ui/core";

import { theme } from "../Util/Theme";
import { MainLinkSection, Emoji, Footer } from "../Util/Components";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <OuterContainer>
        <InnerContainer
          style={{
            //backgroundColor: theme.palette!.background!.default,
            transition: "background-color 0.25s",
          }}
        >
          <Header variant="h1">Charles Hetterich</Header>
          <SubTitle variant="h3">
            A conglomeration of things he has done, created, or thought
          </SubTitle>
          <Body>
            Hello <Emoji symbol="👋" />— I maintain this website in order to
            provide a better context of who I am as a professional & as a
            person. I also use this site as a corner of the web to personalize &
            call my own! Hope you enjoy your stay.
          </Body>
          <Body>
            I am a Designer & Software Developer. Currently I spend my time
            working freelance jobs, as well as on my own business ventures.
          </Body>
          <Body>
            Without further ado, here are some things! From me, to you
            <Emoji symbol="👇" />
          </Body>
          <MainLinkSection
            title="Programming Projects"
            color="#8763ff"
            content={[
              { text: "Soma", link: "#" },
              { text: "BackyardBlitz", link: "#" },
              { text: "Pencil The Game", link: "#" },
              { text: "Game Changer", link: "#" },
            ]}
          />
          <MainLinkSection
            title="Previous Jobs"
            color="#f58b45"
            content={[
              { text: "*Table Date", link: "#" },
              { text: "MBMS", link: "#" },
              { text: "Diver Now", link: "#" },
              { text: "PA Joe", link: "#" },
            ]}
          />
          <MainLinkSection
            title="Design Stuff"
            color="#ff6463"
            content={[
              { text: "My history with design", link: "#" },
              { text: "This website", link: "#" },
              { text: "App Design", link: "#" },
            ]}
          />
          <MainLinkSection
            title="Miscellaneous"
            color="#00d688"
            content={[
              { text: "Music", link: "#" },
              { text: "Recipes", link: "#" },
              { text: "Travel Photos", link: "#" },
            ]}
          />

          <Footer />
        </InnerContainer>
      </OuterContainer>
    </ThemeProvider>
  );
}

const OuterContainer = withStyles((theme) => ({
  root: {
    //display: "flex",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}))(Box);

const InnerContainer = withStyles((theme) => ({
  root: {
    marginTop: 150,
    width: 1000,
    maxWidth: "100vw",
    padding: 50,
    [theme.breakpoints.down("sm")]: {
      marginTop: 80,
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 50,
      padding: 20,
    },
  },
}))(Box);
const Header = withStyles((theme) => ({
  root: {
    marginBottom: 40,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 25,
    },
  },
}))(Typography);
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
}))(Typography);
