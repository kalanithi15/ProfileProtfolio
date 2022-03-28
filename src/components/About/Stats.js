import React from "react";
import styled from "styled-components";
import SkillProgress from "../Common/progressbar/SkillProgress";
import { AboutPageDetails, Skills } from "../../datasets/constants";

const StatsWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const H4 = styled.h4`
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 2.5rem;
`;
const ProgressBars = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function Stats() {
  return (
    <StatsWrapper>
      <H4>{AboutPageDetails.subTitle1}</H4>
      <ProgressBars>
        {Skills.map((item, id) => {
          return (
            <SkillProgress
              key={id}
              skill={item.skill}
              progress={item.progress}
            />
          );
        })}
      </ProgressBars>
    </StatsWrapper>
  );
}

export default Stats;
