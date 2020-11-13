import React from "react";
import { withStyles, Box } from "@material-ui/core";

import { Body, Header } from "../Util/Components";

export const PAJoe: React.FunctionComponent = () => {
  return (
    <Container>
      <Header title="PA Joe" links={[]} color="#ff6463" />
      <Body>
        PA Joe is a Public Adjusting company I am actively freelancing for. The
        job has consisted of rebuilding their marketing site, creating from
        scratch a web, iOS, and Android app, and creating an web admin panel.
      </Body>
      <Body>
        The app is an interface for potential clients to fill out Insurance
        Claims. From there the Adjusters in the admin panel can fill out any
        missing information and connect with the client. The client can sign the
        document, and a final insurance claim form is generated.
      </Body>
      <Body>
        Currently we are closing in on the end of the first round of
        development, which should be within close proximity of when the product
        goes live. As the app does go live, I'll be able to share the marketing
        site as well as display the app, but unfortunately I cannot share any
        more about the unfinished product.
      </Body>
      <Body>
        Working on PA Joe has been a unique experience in itself. Unlike my
        other freelancing work, I am not actually directly developing the app.
        I've put together a qualified team and have been managing the project as
        a whole. It's been a great experience in getting a feeling for
        management, leading meetings, making sure features are relayed from the
        client to the developer as smoothly as possible, etc.
      </Body>
    </Container>
  );
};

const Container = withStyles((theme) => ({
  root: {},
}))(Box);
