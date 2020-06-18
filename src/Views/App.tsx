import React from "react";
import { ThemeProvider, withStyles, Box } from "@material-ui/core";

import { Footer } from "./Footer";

import { ThemeButton, Text } from "../Util/Components";
import { useSelect } from "../Util/Redux";
import { GetTheme } from "../Util/Theme";

export default function App() {
  const systemState = useSelect((s) => s.system);
  const theme = GetTheme(systemState.theme);
  return (
    <ThemeProvider theme={theme}>
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
            <SubTitle variant="body1" color="textSecondary">
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
    [theme.breakpoints.down("md")]: {
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
    [theme.breakpoints.down("md")]: {
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
    [theme.breakpoints.up("md")]: {
      paddingLeft: 0,
    },
    [theme.breakpoints.down("md")]: {
      padding: 50,
      paddingLeft: "8vw",
      paddingTop: 0,
      justifyContent: "start",
    },
  },
}))(Box);

const TitleContainer = withStyles((theme) => ({
  root: {
    paddingTop: 50,
    paddingLeft: "8vw",
    paddingRight: "8vw",
    flexDirection: "column",
    display: "flex",
  },
}))(Box);

const Title = withStyles((theme) => ({
  root: {
    marginLeft: -5,
    fontWeight: 900,
    fontSize: "4em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "3em",
    },
  },
}))(Text);

const SubTitle = withStyles((theme) => ({
  root: {
    marginTop: -15,
    fontSize: "1.5em",
    fontWeight: 700,
    fontStyle: "italic",
    marginBottom: 100,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
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
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },
  },
}))(Text);

const InteractablesContainer = withStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.up("md")]: {
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
