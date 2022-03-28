import React from "react";
import styled from "styled-components";

const Progress = styled.span`
  position: absolute;
  width: ${(props) => props.width};
  top: 0;
  left: 0;
  height: 100%;
  background-color: var(--color-secondary);
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
`;

const ProgressWrapper = styled.div`
  width: 100%;
  height: 0.45rem;
  background-color: var(--color-grey-4);
  margin-left: 1rem;
  position: relative;
`;

function ProgressBar({ progress }) {
  return (
    <ProgressWrapper>
      <Progress width={progress} />
    </ProgressWrapper>
  );
}

export default ProgressBar;
