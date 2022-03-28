import React from "react";
import styled from "styled-components";
import { AboutPageDetails } from "../../datasets/constants";
import DownloadCVButton from "../Common/DownloadCVButton";

const InfoWrapper = styled.div`
  padding-right: 5rem;
`;

const Title = styled.h4`
  font-size: 2rem;
  text-transform: uppercase;
  margin: 0;
`;

const Description = styled.p`
  line-height: 2rem;
`;

function Information() {
  return (
    <InfoWrapper>
      <Title>{AboutPageDetails.infoTitle}</Title>
      <Description>
        {AboutPageDetails.infoDesc1}
        <br />
        <br />
        {AboutPageDetails.infoDesc2}
      </Description>
      <DownloadCVButton />
    </InfoWrapper>
  );
}

export default Information;
