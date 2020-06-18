import { ThemeOptions, createMuiTheme } from "@material-ui/core";

const lightTheme: ThemeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#00ff00",
    },
  },
};

const darkTheme: ThemeOptions = {
  palette: {
    type: "dark",
    primary: {
      main: "#0000ff",
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
