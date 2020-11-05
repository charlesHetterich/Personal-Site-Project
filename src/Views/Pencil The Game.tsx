import React from "react";
import { withStyles, Box } from "@material-ui/core";

import {
  CustomArticleComponents,
  Image,
  SubTitle,
  Body,
  Header,
} from "../Util/Components";

import soma1 from "../Assets/Images/Pencil.mp4";

const { InlineLink } = CustomArticleComponents({
  inlineColor: "#8763ff",
});

export const PencilTheGame: React.FunctionComponent = () => {
  return (
    <Container>
      <Header title="Pencil the Game" links={[]} color="#ff6463" />
      <Body>
        Solve puzzles accompanied by the relaxing{" "}
        <InlineLink
          href="https://music.youtube.com/watch?v=6P2_w8fAu4c&list=RDAMVM6P2_w8fAu4c"
          type="external"
        >
          Girl from Petaluma
        </InlineLink>
        . Your Goal is to combine all of the tiles on the board within a limited
        number of moves. Pay close attention as you play in order to pick up on
        a few tricks needed to bring down your move count.
      </Body>
      <video id="movie" width="350px" src={soma1} autoPlay></video>

      <Body>
        As you might be able to tell from the GIF, the core concept of this game
        is that only tiles of the same color can combine, cycling between red,
        green, & blue as you make each move. As you play further into the game,
        a few more mechanics are introduced.
      </Body>
      <Body>
        There are a total of 15 levels in the game you can work through.
      </Body>
      <SubTitle>Design Goals</SubTitle>
      <Body>
        I spent a lot of this project's lifespan working out <i>'game feel'</i>{" "}
        as well as trying to teach the player as much as possible about game
        mechanics through level design, rather than text.
      </Body>
      <Body>
        I'm super happy how the feeling of playing the game came out— I think it
        was one of my biggest accomplishments in this project and made for a
        huge stepping stone for me as a game developer & designer. On this
        topic, I was fortunate enough to get some great feedback in a twitter
        conversation I had with{" "}
        <InlineLink href="https://twitter.com/KennyYSun" type="external">
          Kenny Sun
        </InlineLink>
        , one of my favorite game developers at the time.
      </Body>
      <Body>
        Really my biggest take away from that conversation was Kenny pointing me
        to{" "}
        <InlineLink
          href="https://www.youtube.com/watch?v=Fy0aCDmgnxg&ab_channel=grapefrukt"
          type="external"
        >
          this video about adding juice to your game
        </InlineLink>
        . After watching that, it was all about adding impact with each move you
        make as the player. I used sound effects, subtle graphics, and added
        physics to the board to pull this off.
      </Body>
      <Image src={soma1} />
      <Body>
        Adding physics to the board ended up being a super cool effect that
        brought the puzzle to life. I ran with this idea and added all of those
        little emotions you see shoot out of the board as you play. This weird,
        slightly anxiety inducing effect, combined with the calming background
        music made for a bizarre aesthetic that I liked a lot.
      </Body>
      <Body>
        What I had a lot more trouble with was teaching through level design. I
        think the best way I could have solved this problem would be if I had a
        lot more test players to observe, followed by constant fine tuning. But
        from the test players I did have, most of the 'hints' I left would go
        unnoticed. And then people would struggle with levels I thought the
        solutions to would be obvious.
      </Body>
      <SubTitle>Flaws</SubTitle>
      <Body>
        One of the biggest flaws of this game is the difficulty curve, like I
        just mentioned before. Levels that were meant to be easy would take much
        longer to solve than intended, and many times would turn into tedious
        trial & error rather than actual problem solving.
      </Body>
      <Body>
        Besides that, there are just some relatively minor design flaws I see—
        the biggest one for me being the counter for <i>turns left</i>. It's
        just a bar at the top of the screen that decreases in size as you make
        each move. I think at the time I felt that it looked better than a
        number counter. I had no formal understanding of design. Now I value UX
        much more than looks, and choosing something I felt looked better at the
        expense of the user actually being able to know clearly how many moves
        they have left was a mistake.
      </Body>
      <Body>
        And then the '<i>story line</i>'... just doesn't make sense. It's based
        in some dystopian society where you, the player, are being instructed to
        perform some seemingly painful brain operation on the deviant character,
        Jimmy, in order to <i>simplify</i> him. It's a huge reach that I
        justified with the very convenient phrase: '<i>It's abstract.</i>'
        Really this was just a desperate attempt to make the weird text shooting
        out of the puzzle make sense. It didn't work too well, but it is what it
        is.
      </Body>
    </Container>
  );
};

const Container = withStyles((theme) => ({
  root: {},
}))(Box);
