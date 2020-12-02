import React from "react";
import { withStyles, Box } from "@material-ui/core";

import {
  //  CustomArticleComponents,
  Image,
  SubTitle,
  Body,
  Header,
} from "../../Util/Components";

//import tb1 from './Assets/tb1.gif'
import tb2 from './Assets/tb2.gif'

/*
const { InlineLink } = CustomArticleComponents({
  inlineColor: "#8763ff",
});
*/

export const TableDate: React.FunctionComponent = () => {
  return (
    <Container>
      <Header
        title="Table"
        links={[

        ]}
        color="#ff6463"
      />
      <Body>
        Table offers an alternative dating app experiences to swipe focused apps such as Tinder, Bumble, & Hinge. The primary goal of Table is to <b>shift the focus from swiping to conversation</b>.
      </Body>
      <Image src={tb2} displayType="mobile" />



   





      <SubTitle>The Pitch</SubTitle>
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
      <SubTitle>The Pitch</SubTitle>
      <Body>
        Ahh
      </Body>
    </Container>
  );
};

const Container = withStyles((theme) => ({
  root: {},
}))(Box);
