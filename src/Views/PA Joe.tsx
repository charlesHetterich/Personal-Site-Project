import React from "react";
import { withStyles, Box } from "@material-ui/core";

import { Body, CustomArticleComponents, Header } from "../Util/Components";

const { InlineLink } = CustomArticleComponents({
  inlineColor: "#8763ff",
});

export const PAJoe: React.FunctionComponent = () => {
  return (
    <Container>
      <Header title="PA Joe" links={[]} color="#ff6463" />
      <Body>
        <i>MBMS</i> is a company in Buffalo that I interned at as a software
        developer. It was pretty standard work— fixing bugs and creating front
        end features for a web app was most of what I did.
      </Body>
      <Body>
        I learned a lot on the job, as this was my first experience writing code
        in a professional environment. It was my first time interacting with a
        massive code base, working with a SCRUM board, seeing the importance of
        QA, testing suites, and a bunch more. And then trying to decipher 15
        year old pieces of code written by somebody who left the company like 7
        years ago was, uh... just another great learning experience!
      </Body>
      <Body>
        Jokes aside, even though I decided to leave the company to pursue my own
        personal goals, it was a great experience I'll always be super thankful
        for having. My only real plight was that we used{" "}
        <InlineLink
          type="external"
          href="https://docs.microsoft.com/en-us/azure/devops/repos/tfvc/what-is-tfvc?view=azure-devops"
        >
          TFVC
        </InlineLink>
        , rather than{" "}
        <InlineLink type="external" href="https://git-scm.com/">
          git
        </InlineLink>
        , which I did not love. I know that when I was there though we were
        actively working to migrate to use git.
      </Body>
    </Container>
  );
};

const Container = withStyles((theme) => ({
  root: {},
}))(Box);
