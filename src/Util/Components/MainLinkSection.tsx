import React from "react";
import { withStyles, Box } from "@material-ui/core";
import { CustomLink } from "./Links";
import { SubTitle } from "./Text";
import { LinkFlags } from "../Types";

// Generates the sub-sections in home page with title & list of links
export const MainLinkSection: React.FunctionComponent<{
  title: string;
  color: string;
  content: { text: string; link: string; flags?: LinkFlags }[];
}> = ({ title, color, content }) => {
  return (
    <Container>
      {/* Title */}
      <SubTitle>{title}</SubTitle>
      {
        // Create all links
        content.map((obj, i) => {
          return (
            <Link
              href={obj.link}
              color={color}
              linkType="internal"
              linkStyle="filled"
              flags={obj.flags}
            >
              {obj.text}
            </Link>
          );
        })
      }
    </Container>
  );
};

const Container = withStyles((theme) => ({
  root: {
    marginTop: 100,
    [theme.breakpoints.down("sm")]: {
      marginTop: 70,
    },
  },
}))(Box);
const Link = withStyles((theme) => ({
  root: {
    margin: 15,
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    [theme.breakpoints.down("sm")]: {
      margin: 10,
    },
  },
}))(CustomLink);
