import React from "react";
import { withStyles, Box } from "@material-ui/core";
import { Body } from "./Text";

type ColorList = {
  [key: string]: string;
};
const colors: ColorList = {
  orange: "#f58b45",
  purple: "#8763ff",
  green: "#00d688",
  red: "#ff6463",
};

// Generates the sub-sections in home page with title & list of links
export const BulletList: React.FunctionComponent<{
  content: React.ReactNode[]; // Define content as an array of ReactNode
}> = ({ content }) => {
  const colorValues = Object.values(colors);

  return (
    <Container>
      {content.map((child, i) => {
        const randomColor =
          colorValues[Math.floor(Math.random() * colorValues.length)];

        return (
          <BulletContainer>
            <Bullet style={{ backgroundColor: randomColor }} />
            {child}
          </BulletContainer>
        );
      })}
    </Container>
  );
};

export const BulletBody = withStyles((theme) => ({
  root: {
    marginBottom: 10,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 8,
    },
  },
}))(Body);

const Bullet = withStyles((theme) => ({
  root: {
    width: 8,
    height: 8,
    marginTop: 8,
    backgroundColor: "black",
    marginRight: 10,
    boxShadow: "3px 3px #333333ff",
    [theme.breakpoints.down("sm")]: {
      marginTop: 5,
    },
  },
}))(Box);

const BulletContainer = withStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "top",
  },
}))(Box);

const Container = withStyles((theme) => ({
  root: {
    marginLeft: 40,
    marginBottom: 40,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 20,
      marginBottom: 25,
    },
  },
}))(Box);
