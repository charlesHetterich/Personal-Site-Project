import React from "react";
import { Title } from "./Text";
import { CustomLink, BackButton } from "./Links";
import { Box } from "@material-ui/core";

export const Header: React.FunctionComponent<{
  title: string;
  links: { text: string; href: string }[];
  color: string;
}> = ({ title, links, color }) => {
  return (
    <Box>
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
    </Box>
  );
};
