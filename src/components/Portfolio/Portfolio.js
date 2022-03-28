import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import {
  PortfolioContent,
  PortFolioPageDetails,
} from "../../datasets/constants";
import Title from "../Common/Title/title";
import { Section } from "../Common/Section";

const style = { color: "black", size: "35px" };

const Portfolios = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  row-gap: 20px;
  column-gap: 2px;
  margin-top: 3rem;
  margin-top: -7px;
  padding: 1.1rem;
  margin-bottom: 0.7rem;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  line-height: 2rem;
  padding-bottom: 1rem;
  width: 70%;
  :hover {
    transition: all 0.4s ease-in-out;
  }
`;

const Port = styled.div`
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  position: relative;
  :hover {
    transition: all 0.4s ease-in-out;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 15px;

  @media only screen and (max-width: 1250px) {
    height: 250px;
  }
  @media only screen and (max-width: 800px) {
    height: 200px;
  }
  :hover {
    transition: all 0.4s ease-in-out;
  }
`;

const ImageWrapper = styled.div`
  :hover {
    transition: all 0.4s ease-in-out;
  }
`;

const HoverItem = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-secondary);
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 15px;
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.4s ease-in-out;

  ${Port}:hover & {
    display: flex;
  }
`;

const Link = styled.a`
  padding: 10px;
`;

function Portfolio() {
  return (
    <Section>
      <Title
        maintitle={PortFolioPageDetails.title}
        span={PortFolioPageDetails.titlespan}
        spanbg={PortFolioPageDetails.titleBg}
      />
      <p class="port-text">{PortFolioPageDetails.subdesc}</p>
      <Portfolios>
        {PortfolioContent.map((content, id) => {
          return (
            <Port key={id}>
              <ImageWrapper>
                <Image src={process.env.PUBLIC_URL + content.img} alt="" />
              </ImageWrapper>
              <HoverItem>
                <h3>{content.title}</h3>
                <div className="icons" style={{ display: "flex" }}>
                  <IconContext.Provider value={style}>
                    {content.links.map((icon, id) => {
                      return <Link href="#">{icon}</Link>;
                    })}
                  </IconContext.Provider>
                </div>
              </HoverItem>
            </Port>
          );
        })}
      </Portfolios>
    </Section>
  );
}

export default Portfolio;
