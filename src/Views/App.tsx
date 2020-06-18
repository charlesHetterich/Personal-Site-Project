import React from "react";
import styled from "styled-components";

import { Footer } from "./Footer";
import { ThemeButton } from "../Util/Components";

import { useSelect } from "../Util/Redux";

import { ThemeProvider } from "@material-ui/core";
import { GetTheme } from "../Util/Theme";

export default function App() {
  const systemState = useSelect((s) => s.system);
  const theme = GetTheme(systemState.theme);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <LeftContainer>
          <TitleContainer>
            <Title>Charles</Title>
            <SubTitle>'s website</SubTitle>
          </TitleContainer>
          <DescText>this is my ittie-bittie website</DescText>
        </LeftContainer>
        <RightContainer>
          <InteractablesContainer>
            <ThemeButton />
          </InteractablesContainer>
        </RightContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 800px) {
    flex: 0;
    padding-bottom: 0;
    align-items: flex-start;
    justify-content: start;
  }
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 801px) {
    padding-left: 0;
  }
  @media (max-width: 800px) {
    padding: 50px;
    padding-left: 8vw;
    padding-top: 0px;
    justify-content: start;
  }
`;

const TitleContainer = styled.div`
  padding-top: 50px;
  padding-left: 8vw;
  padding-right: 8vw;
  flex-direction: column;
  display: flex;
`;

const Title = styled.h1`
  margin-left: -5px;
  font-weight: 900;
  font-size: 4em;
  @media (max-width: 450px) {
    font-size: 3em;
  }
`;

const SubTitle = styled.p`
  color: #535357;
  margin-top: -15px;
  font-size: 1.5em;
  font-weight: 700;
  font-style: italic;
  margin-bottom: 100px;
  @media (max-width: 450px) {
    font-size: 1em;
  }
`;

const DescText = styled.p`
  padding-left: 8vw;
  padding-right: 8vw;
  color: #535357;
  font-size: 1.5em;
  font-weight: 500;
  font-style: italic;
  height: 100px;
  @media (max-width: 450px) {
    font-size: 1em;
  }
`;

const InteractablesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 801px) {
    margin-right: 50px;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  @media (min-width: 801px) {
    position: fixed;
    bottom: 0;
    left: 0;
  }
`;
