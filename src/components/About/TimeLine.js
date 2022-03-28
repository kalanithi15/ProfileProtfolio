import React from "react";
import styled from "styled-components";
import { WorkExperience } from "../../datasets/constants";

const AboutTimeline = styled.div`
  width: 70%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
  margin-bottom: 3rem;
`;

const TimeLineItem = styled.div`
  position: relative;
  padding-left: 3rem;
  border-left: 1px solid var(--color-grey-5);
`;

const IconWrapper = styled.div`
  position: absolute;
  left: -27px;
  top: 0;
  background-color: var(--color-secondary);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

const Duration = styled.p`
  padding: 0.2rem 0.6rem;
  background-color: var(--color-grey-5);
  border-radius: 15px;
  display: inline-block;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 500;
  color: var(--color-grey-2);
`;

const H5 = styled.h5`
  margin: 0;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 600;
`;

const Span = styled.span`
  color: var(--color-grey-2);
  font-weight: 500;
  font-size: 1.2rem;
`;

function TimeLine() {
  return (
    <AboutTimeline>
      {WorkExperience.map((experience, id) => {
        return (
          <TimeLineItem key={id}>
            <IconWrapper>{experience.icon}</IconWrapper>
            <Duration>{experience.duration}</Duration>
            <H5>
              {experience.title}
              <Span>{experience.employer}</Span>
            </H5>
            <p>{experience.desc}</p>
          </TimeLineItem>
        );
      })}
    </AboutTimeline>
  );
}

export default TimeLine;
