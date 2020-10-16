import React from "react";
import { withStyles, Box, Typography, Link } from "@material-ui/core";

// Generates the sub-sections in home page with title & list of links
export const MainLinkSection: React.FunctionComponent<{
  title: string;
  color: string;
  content: { text: string; link: string }[];
}> = ({ title, color, content }) => {
  return (
    <Container>
      <Header variant="h2">{title}</Header>
      {content.map((obj, i) => {
        // Create style for this specific link
        const ThisLink = withStyles((theme) => ({
          root: {
            //color: color,
            opacity: i % 2 === 0 ? 1 : 0.5,
            backgroundColor: color,
            color: theme.palette.background.default,
          },
        }))(StyledLink);

        // Create the actual link
        return (
          <ThisLink variant="body1" style={{}} href={obj.link}>
            {obj.text}
          </ThisLink>
        );
      })}
    </Container>
  );
};

const Container = withStyles((theme) => ({
  root: { marginTop: 100 },
}))(Box);
const Header = withStyles((theme) => ({
  root: { marginBottom: 25 },
}))(Typography);
const StyledLink = withStyles((theme) => ({
  root: {
    margin: 15,
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    display: "inline-block",
    "&:focus, &:hover, &:visited, &:link, &:active": {
      textDecoration: "none",
    },
  },
}))(Link);
