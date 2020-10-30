import React from "react";
import { Title } from "./Text";
import { CustomLink, BackButton } from "./Links";
import { Box, withStyles } from "@material-ui/core";

export const Header: React.FunctionComponent<{
  title: string;
  links: { text: string; href: string }[];
  color: string;
}> = ({ title, links, color }) => {
  return (
    <Container>
      <BackButton color={color} />
      <Title>{title}</Title>
      {links.map((obj) => {
        return (
          <CustomLink
            href={obj.href}
            color={color}
            linkType="external"
            linkStyle="filled"
          >
            {obj.text}
          </CustomLink>
        );
      })}
    </Container>
  );
};

const Container = withStyles((theme) => ({
  root: {
    marginBottom: 60,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 35,
    },
  },
}))(Box);
