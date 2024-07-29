import React from "react";
import { withStyles, Box } from "@material-ui/core";

import {
  Body,
  Header,
  CustomArticleComponents,
  Emoji,
} from "../../Util/Components";

const { InlineLink } = CustomArticleComponents({
  inlineColor: "#8763ff",
});

export const DellMedical: React.FunctionComponent = () => {
  return (
    <Container>
      <Header
        title="Dell Medical   — Psychedelic Research"
        links={[
          {
            text: "Website",
            href: "https://dellmed.utexas.edu/units/center-for-psychedelic-research-and-therapy",
          },
        ]}
        color="#ff6463"
      />
      <Body>
        In early 2022, I connected with{" "}
        <InlineLink
          type="external"
          href="https://dellmed.utexas.edu/directory/gregory-greg-fonzo"
        >
          Dr. Greg Fonzo
        </InlineLink>{" "}
        shortly after hearing about the recent opening of UT's{" "}
        <i>Center for Psychedelic Research & Therapy</i>.{" "}
        <b>Psychedelic assisted therapy</b> is something I believe in and I
        wanted to find out how I could help.
      </Body>
      <Body>
        Over the course of several months I helped Dr. Fonzo in the development of the
        department's pilot study. My job is to build the fMRI & EEG{" "}
        <InlineLink type="external" href="https://www.psychopy.org/">
          PsychoPy
        </InlineLink>{" "}
        tasks.
      </Body>
      <Body>
        I've really enjoyed the work, and it makes me happy to know I
        contributing toward something that means a great deal to me{" "}
        <Emoji symbol="🙂" />.
      </Body>
    </Container>
  );
};

const Container = withStyles((theme) => ({
  root: {},
}))(Box);
