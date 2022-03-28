import React from "react";
import styled from "styled-components";
import ProfileHighlight from "./ProfileHighlight";
import { HighlightItems } from "../../datasets/constants";

const Wrapper = styled.div`
  display: -ms-grid;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 1rem;
  }
`;

function HighLights() {
  return (
    <Wrapper>
      {HighlightItems.map((item, id) => {
        return (
          <ProfileHighlight
            largeText={item.mainItem}
            smallTextBefore={item.secondItem}
            smallTextAfter={item.thirdItem}
          />
        );
      })}
    </Wrapper>
  );
}

export default HighLights;
