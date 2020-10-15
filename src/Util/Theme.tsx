import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  breakpoints: {},
  palette: {
    type: "light",
    background: {
      default: "#ffffff",
    },
    primary: {
      main: "#343436",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#343436",
      light: "#818184",
    },
    text: {
      primary: "#424245",
      secondary: "#535357",
    },
  },
  typography: {
    fontFamily: "roboto",
    h1: {
      fontWeight: 900,
      fontSize: 80,
      color: "#333333",
    },
    h2: {
      fontWeight: 700,
      fontSize: 35,
      color: "#333333",
    },
    h3: {
      fontWeight: 500,
      fontSize: 25,
      fontStyle: "italic",
      color: "#808080",
    },
    body1: {
      fontWeight: 500,
      fontSize: 25,
      color: "#333333",
      lineHeight: 1.75,
    },
  },
});
