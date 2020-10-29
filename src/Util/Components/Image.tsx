import React from "react";
import { Box, withStyles } from "@material-ui/core";

const RegularContainer = withStyles((theme) => ({
  root: {
    boxShadow: "0 0 20px #00000033",
    width: "100%",
  },
}))(Box);
const MobileContainer = withStyles((theme) => ({
  root: {
    border: "10px solid #000000",
    borderRadius: 20,
    overflow: "hidden",
    width: 500,
    flex: 1,
    maxWidth: "100%",
  },
}))(Box);

export const Image: React.FunctionComponent<{
  src: string;
  displayType?: "regular" | "mobile";
}> = ({ src, displayType = "regular" }) => {
  // Choose display type
  const InnerContainer =
    displayType === "regular" ? RegularContainer : MobileContainer;

  return (
    <OuterContainer>
      <InnerContainer>
        <img
          style={{ width: "100%", margin: 0, padding: 0, display: "block" }}
          src={src}
          alt="loading..."
        />
      </InnerContainer>
    </OuterContainer>
  );
};

const OuterContainer = withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 40,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 25,
    },
  },
}))(Box);
