import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  breakpoints: {},
  palette: {
    type: "light",
    background: {
      default: "#FFFCFB",
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
  fontSize: 40,
  color: "#333333",
  lineHeight: 1,
  [theme.breakpoints.down("sm")]: {
    fontSize: 30,
  },
  [theme.breakpoints.down(550)]: {
    fontSize: 30,
  },
  [theme.breakpoints.down(450)]: {
    fontSize: 25,
  },
  [theme.breakpoints.down(360)]: {
    fontSize: 25,
  },
};
theme.typography.h2 = {
  fontWeight: 700,
  fontSize: 20,
  color: "#333333",
  [theme.breakpoints.down("sm")]: {
    fontSize: 15,
  },
  [theme.breakpoints.down(450)]: {
    fontSize: 15,
  },
};
theme.typography.h3 = {
  fontWeight: 500,
  fontSize: 15,
  fontStyle: "italic",
  color: "#808080",
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
  },
  [theme.breakpoints.down(450)]: {
    fontSize: 12,
  },
};
theme.typography.body1 = {
  fontWeight: 500,
  fontSize: 15,
  color: "#333333dd",
  lineHeight: 1.75,
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
  },
  [theme.breakpoints.down(450)]: {
    fontSize: 12,
  },
};

export { theme };
