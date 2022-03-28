import React from "react";
import styled from "styled-components";
import ProgressBar from "./progressbar";

const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 0;
`;

const ProgressPercentText = styled.p``;

function ProgressWithPercent({ progress }) {
  return (
    <ProgressBarContainer>
      <ProgressPercentText>{progress}</ProgressPercentText>
      <ProgressBar progress={progress} />
    </ProgressBarContainer>
  );
}

export default ProgressWithPercent;
