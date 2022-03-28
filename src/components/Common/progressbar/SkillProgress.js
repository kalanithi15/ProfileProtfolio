import React from "react";
import styled from "styled-components";
import ProgressWithPercent from "./ProgressWithPercent";

const SkillWrapper = styled.div``;
const Skill = styled.p`
  line-height: 0;
  margin-bottom: 8px;
`;

function SkillProgress({ skill, progress }) {
  return (
    <SkillWrapper>
      <Skill>{skill}</Skill>
      <ProgressWithPercent progress={progress} />
    </SkillWrapper>
  );
}

export default SkillProgress;
