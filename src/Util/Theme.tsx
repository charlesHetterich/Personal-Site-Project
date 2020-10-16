import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
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
    fontFamily: "'Poppins', sans-serif;",
  },
});
theme.typography.h1 = {
  fontFamily: "'Roboto', sans-serif;",
  fontWeight: 900,
  fontSize: 80,
  color: "#333333",
  lineHeight: 1,
  [theme.breakpoints.down("sm")]: {
    fontSize: 60,
  },
  [theme.breakpoints.down(550)]: {
    fontSize: 50,
  },
  [theme.breakpoints.down(450)]: {
    fontSize: 40,
  },
  [theme.breakpoints.down(360)]: {
    fontSize: 35,
  },
};
theme.typography.h2 = {
  fontWeight: 700,
  fontSize: 35,
  color: "#333333",
  [theme.breakpoints.down("sm")]: {
    fontSize: 27,
  },
  [theme.breakpoints.down(450)]: {
    fontSize: 20,
  },
};
theme.typography.h3 = {
  fontWeight: 500,
  fontSize: 25,
  fontStyle: "italic",
  color: "#808080",
  [theme.breakpoints.down("sm")]: {
    fontSize: 20,
  },
  [theme.breakpoints.down(450)]: {
    fontSize: 15,
  },
};
theme.typography.body1 = {
  fontWeight: 500,
  fontSize: 25,
  color: "#333333",
  lineHeight: 1.75,
  [theme.breakpoints.down("sm")]: {
    fontSize: 20,
  },
  [theme.breakpoints.down(450)]: {
    fontSize: 15,
  },
};

export { theme };
