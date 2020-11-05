import React from "react";
import { ThemeProvider, CssBaseline, Box, withStyles } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { theme } from "./Util/Theme";

import { Home } from "./Views/Home";
import { Soma } from "./Views/Soma";
import { PencilTheGame } from "./Views/Pencil The Game";
import { Lost404 } from "./Views/404";

import { Footer } from "./Util/Components";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <OuterContainer>
          <InnerContainer>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/soma" component={Soma}></Route>
              <Route
                exact
                path="/pencil-the-game"
                component={PencilTheGame}
              ></Route>
              <Route component={Lost404}></Route>
            </Switch>
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
    maxWidth: "100%",
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
