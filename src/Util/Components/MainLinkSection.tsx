import React from "react";
import { withStyles, Box } from "@material-ui/core";
import { CustomLink } from "./Links";
import { SubTitle } from "./Text";

// Generates the sub-sections in home page with title & list of links
export const MainLinkSection: React.FunctionComponent<{
  title: string;
  color: string;
  content: { text: string; link: string }[];
}> = ({ title, color, content }) => {
  return (
    <Container>
      {/* Title */}
      <SubTitle>{title}</SubTitle>
      {
        // Create all links
        content.map((obj, i) => {
          return (
            <CustomLink
              href={obj.link}
              color={color}
              linkType="internal"
              linkStyle="filled"
            >
              {obj.text}
            </CustomLink>
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
