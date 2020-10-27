import React from "react";
import { Box, withStyles } from "@material-ui/core";

const ImgContainer = withStyles((theme) => ({
  root: { flex: 1, maxWidth: "100%" },
}))(Box);
export const Image: React.FunctionComponent<{
  src: string;
  displayType?: "regular" | "mobile";
}> = ({ src, displayType = "regular" }) => {
  const OuterContainer = withStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }))(Box);

  const _ImgContainer =
    displayType === "regular"
      ? withStyles((theme) => ({
          root: {
            boxShadow: "0 0 20px #00000033",
            width: "100%",
          },
        }))(Box)
      : withStyles((theme) => ({
          root: {
            border: "10px solid #000000",
            borderRadius: 20,
            overflow: "hidden",
            width: 500,
          },
        }))(ImgContainer);
  return (
    <OuterContainer>
      <_ImgContainer>
        <img
          style={{ width: "100%", margin: 0, padding: 0, display: "block" }}
          src={src}
          alt="loading..."
        />
      </_ImgContainer>
    </OuterContainer>
  );
};
