import React from "react";
import { Box, withStyles, useTheme, useMediaQuery } from "@material-ui/core";
import { Image } from "./Image";

export const MediaLinks: React.FunctionComponent<{
  // title: string;
  // color: string;
  content: {
    src: string;
    link: string;
    scale?: number;
  }[];
}> = ({ content }) => {
  const theme = useTheme();
  const mediaSize1 = useMediaQuery(theme.breakpoints.down(850)); // I know, this sucks
  const mediaSize2 = useMediaQuery(theme.breakpoints.down(550));
  const mediaSize3 = useMediaQuery(theme.breakpoints.down(400));

  return (
    <Container>
      {
        // Create all links
        content.map((obj, i) => {
          return (
            <a
              href={obj.link}
              key={i}
              style={{
                margin: 10,
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              <Image
                src={obj.src}
                outerStyle={{
                  margin: 0,
                  width: mediaSize1 ?  (mediaSize2 ? (mediaSize3 ? 110 : 160) : 100) : 165,
                  height: mediaSize1 ? (mediaSize2 ? (mediaSize3 ? 110 : 160) : 100) : 165,
                }}
                innerStyle={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 5,
                  overflow: "hidden",
                  objectFit: "cover",
                  backgroundColor: "white",
                  transition: 'transform 0.3s ease',
                }}
                scale={obj.scale}
                onMouseEnter={(e) => e.currentTarget.style.transform = `scale(${obj.scale ? 1.2 * obj.scale : 1.2})`}
                onMouseLeave={(e) => e.currentTarget.style.transform = `scale(${obj.scale ? obj.scale : 1})`}    
              />
            </a>
          );
        })
      }
    </Container>
  );
};

const Container = withStyles((theme) => ({
  root: {
    margin: 0,
    marginTop: 40,

    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}))(Box);
