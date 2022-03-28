import React from "react";
import styled from "styled-components";

const MainTitle = styled.div`
  text-align: center;
  width: 100%;
`;

const Head2 = styled.h2`
  position: relative;
  text-transform: uppercase;
  font-size: 4rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 1250px) {
    font-size: 3rem;
  }
  @media only screen and (max-width: 800px) {
    font-size: 2rem;
  }
`;

const Span = styled.span`
  color: var(--color-secondary);
`;

const SpanBg = styled.span`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 40%;
  color: var(--color-grey-5);
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  z-index: -1;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-weight: 800;
  font-size: 6.3rem;
  @media only screen and (max-width: 1250px) {
    font-size: 4rem;
  }
  @media only screen and (max-width: 800px) {
    font-size: 3rem;
  }
`;

function Title(props) {
  return (
    <MainTitle>
      <Head2>
        {props.maintitle} <Span>{props.span}</Span>
        <SpanBg>{props.spanbg}</SpanBg>
      </Head2>
    </MainTitle>
  );
}

export default Title;
