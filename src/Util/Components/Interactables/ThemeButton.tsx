import React from "react";
import { Button, withStyles } from "@material-ui/core";
import { CycleTheme } from "../../Redux";

export const ThemeButton: React.FunctionComponent = () => {
  return (
    <StyledButton
      autoCapitalize="none"
      variant="contained"
      color="primary"
      onClick={() => {
        CycleTheme();
      }}
    >
      Hello World
    </StyledButton>
  );
};

export const StyledButton = withStyles((theme) => ({
  root: {
    borderRadius: 15,
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
    fontFamily: "'Roboto Slab', serif",
    fontWeight: 400,
    fontSize: "1.2em",
  },
  label: {
    textTransform: "capitalize",
    color: theme.palette.primary.contrastText,
  },
}))(Button);
