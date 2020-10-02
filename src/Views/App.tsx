import React from "react";
import {
  ThemeProvider,
  withStyles,
  Box,
  CssBaseline,
  Typography,
} from "@material-ui/core";

import { theme } from "../Util/Theme";

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
          <SubTitle variant="h2">
            A conglomeration of things he has done, created, or thought{" "}
          </SubTitle>
          <Body variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </Body>
          <Body variant="body1">
            anisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Body>
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
    width: 900,
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
  },
}))(Typography);
const SubTitle = withStyles((theme) => ({
  root: { marginBottom: 70 },
}))(Typography);
const Body = withStyles((theme) => ({
  root: { marginBottom: 30 },
}))(Typography);
