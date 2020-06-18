import { withStyles, Typography } from "@material-ui/core";

export const Text = withStyles((theme) => ({
  root: {
    transition: "color 0.25s",
  },
}))(Typography);
