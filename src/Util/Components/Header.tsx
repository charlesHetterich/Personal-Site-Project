import React from "react";
import { Title } from "./Text";
import { CustomLink, BackButton } from "./Links";
import { Box, withStyles } from "@material-ui/core";
import { LinkType } from "../Types";
export const Header: React.FunctionComponent<{
  title: string;
  links: {
    text: string;
    href: string;
    linkType?: LinkType;
    downloadName?: string;
  }[];
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
            downloadName={obj.downloadName}
            linkType={obj.linkType ?? "external"}
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
