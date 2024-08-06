import React from "react";
import { Box, withStyles } from "@material-ui/core";
import { Body } from "./Text";

const RegularContainer = withStyles((theme) => ({
  root: {
    boxShadow: "0 0 20px #00000033",
    width: "100%",
  },
}))(Box);
const MobileContainer = withStyles((theme) => ({
  root: {
    border: "15px solid #000000",
    borderRadius: 30,
    overflow: "hidden",
    width: 400,
    flex: 1,
    maxWidth: "100%",

    [theme.breakpoints.down(350)]: {
      border: "7px solid #000000",
      borderRadius: 20,
    },
  },
}))(Box);

export const Image: React.FunctionComponent<{
  src: string;
  displayType?: "regular" | "mobile";
  caption?: string;
  outerStyle?: React.CSSProperties; // Custom style for the OuterContainer
  innerStyle?: React.CSSProperties; // Custom style for the InnerContainer
}> = ({ src, displayType = "regular", caption, outerStyle, innerStyle }) => {
  // Choose display type
  const InnerContainer =
    displayType === "regular" ? RegularContainer : MobileContainer;

  return (
    <OuterContainer style={outerStyle}>
      <InnerContainer style={innerStyle}>
        <img
          style={{ width: "100%", margin: 0, padding: 0, display: "block" }}
          src={src}
          alt="loading..."
        />
      </InnerContainer>
      {caption && <CaptionBody>{caption}</CaptionBody>}
    </OuterContainer>
  );
};

const CaptionBody = withStyles((theme) => ({
  root: {
    scale: 0.8,
    opacity: 0.7,
    fontStyle: "italic",
    margin: 0,
  },
}))(Body);

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
