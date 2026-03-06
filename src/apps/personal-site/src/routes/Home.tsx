import { Title, Body, Image, MainLinkSection, MediaLinks, InlineLink } from "@chetterich/ui";
import myPhoto from "../assets/me.jpeg";
import ocaiMedia from "../assets/multi_person.gif";
import somaMedia from "../assets/soma2.gif";
import pencilMedia from "../assets/pencil1.gif";
import pcnMedia from "../assets/pcn_figure.png";
import resumePdf from "../assets/charles_resume_1_25.pdf";

export function Home() {
  return (
    <div>
      <div className="home-profile">
        <Image
          src={myPhoto}
          displayType="regular"
          outerStyle={{ alignItems: "normal" }}
          innerStyle={{
            width: 200,
            borderRadius: 2,
            borderTopRightRadius: 30,
            overflow: "hidden",
          }}
        />
        <div className="home-text-content">
          <Title className="home-title">Charles Hetterich</Title>
          <Body>
            Hi! I'm Charles. I received my Bachelors in Computer Science from the University at
            Buffalo, and my Masters in Data Science from UT Austin. I enjoy entrepreneurship and
            designing novel solutions to problems I am passionate about.
          </Body>
          <Body>
            Recently I have been most interested in artificial intelligence, as well as
            decentralized computing/governance platforms.
          </Body>
        </div>
      </div>
      <MediaLinks
        content={[
          { src: ocaiMedia, link: "/ocai-ltd" },
          { src: pcnMedia, link: "https://arxiv.org/abs/2309.12996", scale: 0.8 },
          { src: somaMedia, link: "/soma", scale: 1.5 },
          { src: pencilMedia, link: "/pencil-the-game" },
        ]}
      />
      <MainLinkSection
        title="Previous Work"
        color="#f58b45"
        content={[
          { text: "OCAI LTD", link: "/ocai-ltd" },
          { text: "E Source", link: "/esource" },
          { text: "Table", link: "/table" },
          { text: "Dell Medical", link: "/dell-medical" },
          { text: "PA Joe", link: "/pa-joe" },
          { text: "Diver Now", link: "/diver-now" },
          { text: "MBMS", link: "/mbms" },
        ]}
      />
      <MainLinkSection
        title="Older Things"
        color="#8763ff"
        content={[
          { text: "SOMA", link: "/soma" },
          { text: "Pencil The Game", link: "/pencil-the-game" },
          { text: "Game Changer", link: "/game-changer" },
          { text: "Backyard Blitz", link: "/backyard-blitz" },
        ]}
      />
      <MainLinkSection
        title=". . ."
        color="#00d688"
        content={[
          { text: "Contact", link: "/contact" },
          {
            text: "Github",
            link: "https://github.com/charlesHetterich",
            linkType: "external",
          },
          { text: "Gitlab", link: "https://gitlab.com/cHetterich", linkType: "external" },
          {
            text: "Resume",
            link: resumePdf,
            linkType: "external",
          },
        ]}
      />
    </div>
  );
}
