import React from "react";
import { withStyles, Box } from "@material-ui/core";

import { Body, CustomArticleComponents, Header } from "../Util/Components";

const { InlineLink } = CustomArticleComponents({
  inlineColor: "#8763ff",
});

export const Contact: React.FunctionComponent = () => {
  return (
    <Container>
      <Header title="Contact" links={[]} color="#ff6463" />
      <Body>
        If you're interested in working with me, looking for a quote on a
        project, or just have a general question, shoot me an email.
      </Body>
      <Body>
        I can be reached at{" "}
        <InlineLink type="external" href="mailto:hetterich.charles@gmail.com">
          hetterich.charles@gmail.com
        </InlineLink>
        .
      </Body>
    </Container>
  );
};

const Container = withStyles((theme) => ({
  root: {},
}))(Box);
