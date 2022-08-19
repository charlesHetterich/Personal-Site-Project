import React from "react";
import { withStyles, Box } from "@material-ui/core";

import {
  Body,
  Header,
  SubTitle,
  Whisper,
  CustomArticleComponents,
  Emoji,
} from "../../Util/Components";

const { InlineLink } = CustomArticleComponents({
  inlineColor: "#8763ff",
});

export const ESource: React.FunctionComponent = () => {
  return (
    <Container>
      <Header
        title="E Source"
        links={[
          {
            text: "Website",
            href: "https://www.esource.com/public/data-science",
          },
        ]}
        color="#ff6463"
      />
      <Body>
        E Source is a company that provides data science solutions to utilities
        across the US & Canada. I was a member of the data science division.
      </Body>
      <Body>
        I felt like I was in a good space with my team— surrounded by talented
        people, always pushing to find the balance between meeting deadlines and
        maintaining modern practices. One of my favorite qualities of my team
        was that we were allotted time to do R&D on technologies we were
        interested in, and then pitch ways to incorporate our findings into the
        products.
      </Body>
      <Body>
        We were a lean, micro-service/product ownership oriented team.
      </Body>
      <SubTitle>Storm Insight</SubTitle>
      <Body>
        {" "}
        <InlineLink
          type="external"
          href="https://www.esource.com/701211siuw/e-source-digital-grid-solutions-storm-insight/?utm_source=marketo&utm_medium=press-release&utm_term=2022-07-19-digital-grid-press-release&utm_campaign=digital-grid-pr"
        >
          Storm Insight
        </InlineLink>{" "}
        is an E Source service that I led the production of. The core service
        here is providing outage data to utilities. In layman's terms, we used
        weather data to make predictions of how many outages{" "}
        <Whisper>
          (an example of an outage being a snapped electrical line)
        </Whisper>{" "}
        there would be in a specific region. This allowed our utility clients to
        better prepare their teams to make repairs on outages.
      </Body>
      <Body>
        Before Storm Insight, each utility provided their own weather data. We
        would create pipelines specific to their data, and send them predictions
        in a csv. The goal of Storm Insight was to use a centralized weather
        data provider for all of our clients, and build out a UI for them to see
        all of the useful outage data on.
      </Body>
      <Body>
        I designed all of the UI for this product in{" "}
        <InlineLink type="external" href="https://www.figma.com/">
          Figma
        </InlineLink>
        , which was used whenever we pitched Storm Insight to our clients{" "}
        <Whisper>
          (They loved it <Emoji symbol="😉" />)
        </Whisper>
        . I also built the full big data pipeline for this product, which is a
        bulk of the backend work.
      </Body>
      <SubTitle>CI/CD & Processes</SubTitle>
      <Body>
        When I joined the team, almost everything we did was Java microservices.
        We started shifting, especially with Storm Insight, toward lighter
        weight, Python microservices, as well as internal Python packages.
        Because this was a new shift, we didn't have a solid standard for using
        Python. Something I've come to love, is building processes. So I was
        thrilled to design our standards/practices, as well as build out our
        CI/CD process for Python services & packages!
      </Body>
      <Body>
        When I left the company, there was still some peripheral work to be done
        here, but I'm really happy with where I left things. There was a solid
        foundation, and within minutes we were able to create a new internal
        package that was fully included in our CI/CD process, available company
        wide.
      </Body>
      <SubTitle>Leaving the Company</SubTitle>
      <Body>
        Pursuing my masters in data science was inspired by my time at E Source.
        Going to school, I wanted to be able to focus on my studies (as well as
        spend my time as a student in Austin, TX!), so ultimately, this was the
        reason I left the company. I truly cherished my time with E Source and
        all that I learned from them. I felt that my growth as a software
        engineer was a top priority within my team.
      </Body>
    </Container>
  );
};

const Container = withStyles((theme) => ({
  root: {},
}))(Box);
