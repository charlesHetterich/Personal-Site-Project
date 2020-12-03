import React from "react";
import { withStyles, Box } from "@material-ui/core";

import {
  CustomArticleComponents,
  Image,
  SubTitle,
  Body,
  Header,
} from "../../Util/Components";

import tb1 from "./Assets/tb1.gif";
import tb2 from "./Assets/tb2.gif";

const { InlineLink } = CustomArticleComponents({
  inlineColor: "#8763ff",
});

export const TableDate: React.FunctionComponent = () => {
  return (
    <Container>
      <Header
        title="Table"
        links={[
          {
            text: "Executive Summary",
            href: require("./Assets/executive summary.pdf"),
          },
          {
            text: "Pitch Deck",
            href: require("./Assets/Panasci Round 2 Pitch Deck.pdf"),
          },
        ]}
        color="#ff6463"
      />
      <Body>
        Table is a dating app where members go on 24 hour texting dates where
        they can have conversation before deciding to <b>like</b> or <b>pass</b>{" "}
        on other members.
      </Body>
      <Image src={tb2} displayType="mobile" />

      <SubTitle>How it works</SubTitle>
      <Body>
        When someone first joins the app they can immediately search for a date
        after selecting their search criteria (gender, age-range, distance).
        After starting a search, they are added to a date queue where we match
        members on dates.
      </Body>
      <Body>
        Once a date is found, both members are notified and the clock starts.
        When they open up the date, there is a messenger as well as a profile
        page. Both members can message each other freely for the 24 hour time
        frame as well as view each others' profile.
      </Body>
      <Body>
        After 24 hours pass by, two things happen. First— the chat locks up.
        Neither member can message each other at this point, but they can still
        view the conversation they had as well as each others' profile. Second—
        both members are given the opportunity to <b>like</b> or <b>pass</b> on
        each other.
      </Body>
      <Image src={tb1} displayType="mobile" />
      <Body>
        The date will disappear after making a decision. If both members like
        each other, the date will re-appear as a permanent match.
      </Body>
      <Body>Members can go on multiple dates at once.</Body>
      <Body>
        Over time we maintain a score on members' engagement with one another
        and match more engaged members together on dates.
      </Body>
      <SubTitle>Value Proposition</SubTitle>
      <Body>
        Our mission statement is based on one core philosophy: that more
        conversations on dating apps lead to more in-person dates. And so, our
        mission is <b>to bring more quality conversations to our members</b>.
      </Body>
      <Body>
        In our pitch we reference{" "}
        <InlineLink
          type="external"
          href="https://arxiv.org/ftp/arxiv/papers/1607/1607.03320.pdf"
        >
          this study
        </InlineLink>{" "}
        which brings to light how short most conversations in today's most
        popular dating app,{" "}
        <InlineLink type="external" href="https://tinder.com">
          Tinder
        </InlineLink>
        , really are. The study only counts matches where at least one message
        was sent. According to the study,{" "}
        <b>only 50% of conversations contain more than two messages</b>. Another
        sizable chunk of these conversations are only 3-5 messages long. This
        poses a problem because the reality of the situation is that most of
        these conversations that die early don't lead to anything but someone's
        time being wasted.
      </Body>
      <Body>But why is this happening?</Body>
      <Body>
        Because apps like Tinder, Bumble, Hinge, etc. are all{" "}
        <b>swipe focused</b>. A large majority of tinder members' time is spent
        swiping, not chatting.
      </Body>
      <Body>
        This is where Table shines. From the ground up, Table is designed around
        encouraging and enabling quality conversations. If somebody isn't
        engaging in conversation, there isn't much for them to do on our app.
        This fact, along with our member engagement score mentioned earlier,
        allows us to effectively cultivate a community of engaged members.
      </Body>
    </Container>
  );
};

const Container = withStyles((theme) => ({
  root: {},
}))(Box);
