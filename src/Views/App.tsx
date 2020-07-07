import React from "react";
import { ThemeProvider, withStyles, Box, CssBaseline } from "@material-ui/core";

import { Footer } from "./Footer";

import { ThemeButton, Text } from "../Util/Components";
import { useSelect } from "../Util/Redux";
import { GetTheme } from "../Util/Theme";

export default function App() {
  const systemState = useSelect((s) => s.system);
  const theme = GetTheme(systemState.theme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container
        style={{
          backgroundColor: theme.palette.background.default,
          transition: "background-color 0.25s",
        }}
      >
        <LeftContainer>
          <TitleContainer>
            <Title variant="h1" color="primary">
              Charles
            </Title>
            <SubTitle variant="h2" color="secondary">
              's website
            </SubTitle>
          </TitleContainer>
          <DescText variant="body1" color="textSecondary">
            this is my ittie-bittie website
          </DescText>
        </LeftContainer>
        <RightContainer>
          <InteractablesContainer>
            <ThemeButton />
          </InteractablesContainer>
        </RightContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Container>
    </ThemeProvider>
  );
}

const Container = withStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}))(Box);

const LeftContainer = withStyles((theme) => ({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flex: 0,
      paddingBottom: 0,
      alignItems: "flex-start",
      justifyContent: "start",
    },
  },
}))(Box);

const RightContainer = withStyles((theme) => ({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 0,
    },
    [theme.breakpoints.down("sm")]: {
      padding: 50,
      paddingLeft: "8vw",
      paddingTop: 0,
      justifyContent: "start",
    },
  },
}))(Box);

const TitleContainer = withStyles((theme) => ({
  root: {
    paddingLeft: "8vw",
    paddingRight: "8vw",
    flexDirection: "column",
    display: "flex",
  },
}))(Box);

const Title = withStyles((theme) => ({
  root: {
    marginLeft: -5,
    fontWeight: 600,
    fontSize: "6em",

    [theme.breakpoints.down("sm")]: {
      marginTop: 50,
      fontSize: "8em",
    },
    [theme.breakpoints.down(500)]: {
      fontSize: "6em",
      marginTop: 30,
    },
    [theme.breakpoints.down(400)]: {
      marginTop: 10,
    },
    [theme.breakpoints.down(375)]: {
      marginTop: 5,
      fontSize: "5em",
    },
    /*
    [theme.breakpoints.down("xs")]: {
      fontSize: "5em",
    },*/
  },
}))(Text);

const SubTitle = withStyles((theme) => ({
  root: {
    marginTop: -20,
    fontSize: "2em",
    fontWeight: 500,
    marginBottom: 100,
    [theme.breakpoints.down("sm")]: {
      fontSize: "3em",
      marginBottom: 100,
      marginTop: -30,
    },
    [theme.breakpoints.down(500)]: {
      fontSize: "2em",
      marginTop: -20,
    },
    [theme.breakpoints.down(375)]: {
      fontSize: "1.5em",
      marginTop: -15,
    },
  },
}))(Text);

const DescText = withStyles((theme) => ({
  root: {
    paddingLeft: "8vw",
    paddingRight: "8vw",
    fontSize: "1.5em",
    fontWeight: 500,
    fontStyle: "italic",
    height: 100,
    color: theme.palette.secondary.light,
  },
}))(Text);

const InteractablesContainer = withStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.up("sm")]: {
      marginRight: 50,
    },
  },
}))(Text);

const FooterContainer = withStyles((theme) => ({
  root: {
    alignItems: "flex-start",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      position: "fixed",
      bottom: 0,
      left: 0,
    },
  },
}))(Box);
