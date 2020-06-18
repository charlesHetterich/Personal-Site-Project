import React from "react";
import { Button } from "@material-ui/core";
import { CycleTheme } from "../../Redux";

export const ThemeButton: React.FunctionComponent = () => {
  console.log("start");
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => {
        CycleTheme();
      }}
    >
      Hello World
    </Button>
  );
};
