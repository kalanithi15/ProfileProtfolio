import React from "react";
import styled from "styled-components";
import { Section } from "../Common/Section";
import LeftHome from "./LeftHome";
import RightHome from "./RightHome";

const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: 100vh;
`;

function Home() {
  return (
    <Section>
      <HeaderContent>
        <LeftHome />
        <RightHome />
      </HeaderContent>
    </Section>
  );
}

export default Home;
