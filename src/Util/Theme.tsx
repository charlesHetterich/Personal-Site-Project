import { ThemeOptions, createMuiTheme } from "@material-ui/core";

const genericTheme: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 800,
      lg: 1280,
      xl: 1920,
    },
  },
};

const lightTheme: ThemeOptions = {
  ...genericTheme,
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
};

const darkTheme: ThemeOptions = {
  ...genericTheme,
  palette: {
    type: "dark",
    background: {
      default: "#242426",
    },
    primary: {
      main: "#f5f5ff",
      contrastText: "#242426",
    },
    secondary: {
      main: "#f5f5ff",
      light: "#a1a1a5",
    },
    text: {
      primary: "#535357",
      secondary: "#424245",
    },
  },
};

export type ThemeMode = "light" | "dark";
export const GetTheme = (theme: ThemeMode) => {
  switch (theme) {
    case "light":
      return createMuiTheme(lightTheme);
    case "dark":
      return createMuiTheme(darkTheme);
  }
};
