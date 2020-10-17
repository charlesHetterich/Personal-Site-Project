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
            color: theme.palette.background.default,
            backgroundColor: color,
            boxShadow: "5px 5px #333333ff",
            transition: "0.2s box-shadow ",
            "&:hover": {
              boxShadow: "10px 10px #333333ff",
            },
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
  root: {
    marginTop: 100,
    [theme.breakpoints.down("sm")]: {
      marginTop: 50,
    },
  },
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
