import React from "react";
import { ThemeProvider, CssBaseline, Box, withStyles } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { theme } from "./Util/Theme";

import { Home } from "./Views/Home";

import { Soma } from "./Views/Soma/Soma";
import { PencilTheGame } from "./Views/Pencil The Game/Pencil The Game";
import { BackyardBlitz } from "./Views/Backyard Blitz/Backyard Blitz";
import { GameChanger } from "./Views/Game Changer/Game Changer";

import { MBMS } from "./Views/MBMS";
import { DiverNow } from "./Views/Diver Now/Diver Now";
import { PAJoe } from "./Views/PA Joe";

import { Contact } from "./Views/Contact";
import { Podcast } from "./Views/Podcast";

import { Lost404 } from "./Views/404";

import { Footer, ScrollToTop } from "./Util/Components";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
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
              <Route
                exact
                path="/backyard-blitz"
                component={BackyardBlitz}
              ></Route>
              <Route exact path="/game-changer" component={GameChanger}></Route>
              <Route exact path="/mbms" component={MBMS}></Route>
              {/*<Route exact path="/diver-now" component={DiverNow}></Route>*/}
              <Route exact path="/pa-joe" component={PAJoe}></Route>
              <Route exact path="/contact" component={Contact}></Route>
              <Route exact path="/podcast" component={Podcast}></Route>
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
