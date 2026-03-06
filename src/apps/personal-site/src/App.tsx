import type { ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import { Body, SubTitle, InlineLink, useScrollToTop } from "@chetterich/ui";

import { Home } from "./routes/Home";
import { NotFound } from "./routes/NotFound";

import Soma from "./content/soma.mdx";
import PencilTheGame from "./content/pencil-the-game.mdx";
import BackyardBlitz from "./content/backyard-blitz.mdx";
import GameChanger from "./content/game-changer.mdx";
import DellMedical from "./content/dell-medical.mdx";
import ESource from "./content/esource.mdx";
import TableDate from "./content/table-date.mdx";
import MBMS from "./content/mbms.mdx";
import DiverNow from "./content/diver-now.mdx";
import PAJoe from "./content/pa-joe.mdx";
import OcaiLtd from "./content/ocai-ltd.mdx";
import Contact from "./content/contact.mdx";
import Podcast from "./content/podcast.mdx";

const mdxComponents = {
  p: ({ children }: { children?: ReactNode }) => <Body>{children}</Body>,
  h2: ({ children }: { children?: ReactNode }) => <SubTitle>{children}</SubTitle>,
  a: ({ href, children }: { href?: string; children?: ReactNode }) => (
    <InlineLink href={href ?? "#"} type="external" color="#8763ff">
      {children}
    </InlineLink>
  ),
};

function ScrollToTop() {
  useScrollToTop();
  return null;
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: 100,
      }}
    >
      <div className="inner-container">{children}</div>
    </div>
  );
}

export function App() {
  return (
    <MDXProvider components={mdxComponents}>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/soma" element={<Soma />} />
            <Route path="/pencil-the-game" element={<PencilTheGame />} />
            <Route path="/backyard-blitz" element={<BackyardBlitz />} />
            <Route path="/game-changer" element={<GameChanger />} />
            <Route path="/dell-medical" element={<DellMedical />} />
            <Route path="/esource" element={<ESource />} />
            <Route path="/table" element={<TableDate />} />
            <Route path="/mbms" element={<MBMS />} />
            <Route path="/diver-now" element={<DiverNow />} />
            <Route path="/pa-joe" element={<PAJoe />} />
            <Route path="/ocai-ltd" element={<OcaiLtd />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </MDXProvider>
  );
}
