import React from "react";
import styled from "styled-components";
import ProfileImage from "./ProfileImage";

const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const CutShape = styled.div`
  transition: all 0.4s ease-in-out;
  width: 65%;
  height: 100%;
  background-color: var(--color-secondary);
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  clip-path: polygon(0 0, 46% 0, 79% 100%, 0% 100%);
`;

function LeftHome() {
  return (
    <LeftHeader>
      <CutShape />
      <ProfileImage />
    </LeftHeader>
  );
}

export default LeftHome;
