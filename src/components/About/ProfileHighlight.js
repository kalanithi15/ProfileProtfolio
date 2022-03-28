import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* border: 1px solid var(--color-grey-5); */
  border-radius: 5px;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  -webkit-box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.1);
  box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.1);
  :hover {
    border: 1px solid var(--color-secondary);
    cursor: default;
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);

    -webkit-box-shadow: 1px 4px 15px rgba(0, 0, 0, 0.32);
    box-shadow: 1px 4px 15px rgba(0, 0, 0, 0.32);
  }
`;

const Wrapper = styled.div`
  padding: 1.5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

const Large = styled.p`
  font-size: 3rem;
  font-weight: 700;
  margin: 0px;
  color: var(--color-secondary);
`;

const Small = styled.p`
  padding-left: 3rem;
  position: relative;
  text-transform: uppercase;
  font-size: 1.2rem;
  margin: 0px;
  /* color: var(--color-grey-1); */
  letter-spacing: 2px;
`;

function ProfileHighlight({ largeText, smallTextBefore, smallTextAfter }) {
  return (
    <Container>
      <Wrapper>
        <Large>{largeText}</Large>
        <Small>
          {smallTextBefore} <br /> {smallTextAfter}
        </Small>
      </Wrapper>
    </Container>
  );
}

export default ProfileHighlight;
