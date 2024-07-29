import React from "react";
import { withStyles, Box } from "@material-ui/core";

import { Body, Header, Image } from "../Util/Components";

import pajoe1 from "./Assets/pa_joe/pajoe1.webp";
import pajoe2 from "./Assets/pa_joe/pajoe2.webp";

export const PAJoe: React.FunctionComponent = () => {
  return (
    <Container>
      <Header
        title="PA Joe"
        links={[
          {
            text: "Website",
            href: "https://pajoe.com/",
          },
        ]}
        color="#ff6463"
      />
      <Body>
        PA Joe is a Public Adjusting company I freelanced for in 2020-2021. The
        job has consisted of rebuilding their marketing site, creating from
        scratch a web, iOS, and Android app, and creating a web admin panel.
      </Body>
      <Image src={pajoe1} displayType="mobile" />
      <Body>
        The app is an interface for potential clients to fill out Insurance
        Claims. From there the Adjusters in the admin panel can fill out any
        missing information and connect with the client. The client can sign the
        document, and a final insurance claim form is generated.
      </Body>
      <Body>
        Working on PA Joe has been a unique experience in itself. Unlike my
        other freelancing work, I did not actually directly developing the app.
        I put together a qualified team and have been managing the project as
        a whole. It's been a great experience in getting a feeling for
        management, leading meetings, making sure features are relayed from the
        client to the developer as smoothly as possible, etc.
      </Body>
      <Image src={pajoe1} displayType="mobile" />
    </Container>
  );
};

const Container = withStyles((theme) => ({
  root: {},
}))(Box);
