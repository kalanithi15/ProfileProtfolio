import React from "react";
import Title from "../Common/Title/title";
import styled from "styled-components";
import TimeLine from "./TimeLine";
import Information from "./Information";
import HighLights from "./HighLights";
import Stats from "./Stats";
import { AboutPageDetails } from "../../datasets/constants";
import { Section } from "../Common/Section";

const TopContainer = styled.div`
  display: -ms-grid;
  width: 75%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 3.5rem;
  /* padding-bottom: 5rem; */
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const H4 = styled.h4`
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 2.5rem;
`;

function About() {
  return (
    <Section>
      <Title
        maintitle={AboutPageDetails.title}
        span={AboutPageDetails.titlespan}
        spanbg={AboutPageDetails.titleBg}
      />
      <TopContainer>
        <Information />
        <HighLights />
      </TopContainer>
      <Stats />
      <H4>{AboutPageDetails.subTitle2}</H4>
      <TimeLine />
    </Section>
  );
}

export default About;
