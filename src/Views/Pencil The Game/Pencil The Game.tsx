import React from "react";
import { withStyles, Box } from "@material-ui/core";

import {
  CustomArticleComponents,
  Image,
  SubTitle,
  Body,
  Header,
  Emoji,
} from "../../Util/Components";

import pencil1 from "./Assets/pencil1.gif";

const { InlineLink } = CustomArticleComponents({
  inlineColor: "#8763ff",
});

export const PencilTheGame: React.FunctionComponent = () => {
  return (
    <Container>
      <Header
        title="Pencil the Game"
        links={[
          {
            text: "Trailer",
            href: require("./Assets/Pencil.mp4"),
          },
        ]}
        color="#ff6463"
      />
      <Body>
        Sit back, relax, & enjoy the ASMR of drawing with a pencil{" "}
        <Emoji symbol="😌" />. Use the pencil to draw along the outline to get a
        high score. Be careful not to break the tip, and make sure sure you draw
        quick enough to outrun the red bar!
      </Body>
      <Image src={pencil1} displayType="mobile" />
      <Body>
        So unfortunately you, nor I, will be able to play this game. I made this
        wayyyy back on my family computer, and one day while I was working on an
        update to the game, the whole project vanished. To this day I don't know
        what happened to it, but it's gone now. All that I have left is the
        trailer & a few screen recordings!
      </Body>
      <Body>
        When it did exist though, it was super cool— it was the first app I had
        ever published. It was exciting to see everyone from my high school
        genuinely have fun playing the game and even get slightly addicted to
        it. I published it to the App Store and kept it live for a year until my
        Apple Developer license expired.
      </Body>
      <SubTitle>Development</SubTitle>
      <Body>
        If the similar titles don't make it obvious enough, the game was heavily
        inspired by{" "}
        <InlineLink
          type="external"
          href="https://apps.apple.com/us/app/burger-the-game/id1023218196"
        >
          Burger — The Game
        </InlineLink>
        . The developer,{" "}
        <InlineLink
          type="external"
          href="https://twitter.com/kamibox_ph?lang=en"
        >
          Philipp Stollenmayer
        </InlineLink>
        , has generally had a pretty significant impact on my keen interest in
        minimalist design.
      </Body>
      <Body>
        The whole game started from me playing around in illustrator trying to
        make some art. Eventually I made the pencil you see in the game and
        liked the look of it enough to want to make an entire game around it.
        From the start, my only requirement was that the pencil was big and
        smack-in-the-middle of the screen.
      </Body>
      <Body>
        After tinkering around with a few ideas, I settled on the current
        concept of the game. From there it was a matter of fine tuning the idea
        a bit.
      </Body>
      <Body>
        I don't really have much else to say about the design process besides
        that making the pencil sound you hear in-game was a cool problem to
        solve. I recorded myself draw with a pencil, edited the sound with{" "}
        <InlineLink type="external" href="https://www.audacityteam.org/">
          Audacity
        </InlineLink>{" "}
        so that it was a seamless loop, and then linked the volume of the sound
        with the velocity of the pencil in-game. Nothing special really, but at
        the time it was a high level of detail that I was proud of.
      </Body>
    </Container>
  );
};

const Container = withStyles((theme) => ({
  root: {},
}))(Box);
