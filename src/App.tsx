import React from "react";
import { ThemeProvider, CssBaseline, Box, withStyles } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";

import { theme } from "./Util/Theme";

import { Home } from "./Views/Home";
import { Footer } from "./Util/Components";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <OuterContainer>
          <InnerContainer>
            <Route exact path="/" component={Home}></Route>
            <Footer />
          </InnerContainer>
        </OuterContainer>
      </ThemeProvider>
    </BrowserRouter>
  );
}

const OuterContainer = withStyles((theme) => ({
  root: {
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
