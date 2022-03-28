import React from "react";
import styled from "styled-components";
import DownloadCVButton from "../Common/DownloadCVButton";
import { HomePageDetails } from "../../datasets/constants";

const Wrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding-right: 18rem;
`;

const DownloadWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-item-align: start;
  align-self: flex-start;
`;

const Name = styled.h1`
  font-size: 3rem;
`;

const NameSpan = styled.span`
  color: var(--color-secondary);
`;

const Details = styled.p`
  margin: 1.5rem 0;
  line-height: 2rem;
`;

function RightHome() {
  return (
    <Wrapper>
      <Name>
        {HomePageDetails.intro}
        <NameSpan>{HomePageDetails.name}</NameSpan>
        {HomePageDetails.role}
      </Name>
      <Details>{HomePageDetails.desc}</Details>
      <DownloadWrapper>
        <DownloadCVButton />
      </DownloadWrapper>
    </Wrapper>
  );
}

export default RightHome;
