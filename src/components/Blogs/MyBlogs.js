import React from "react";
import styled from "styled-components";
import { BlogContentData, BlogPageDetails } from "../../datasets/constants";
import { Image } from "../Common/Image";
import { Section } from "../Common/Section";
import Title from "../Common/Title/title";

const BlogContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Blog = styled.div`
  margin-top: -7px;
  padding: 1.1rem;
  margin-bottom: 0.7rem;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  line-height: 2rem;
  padding-bottom: 1rem;
`;

const Blogs = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  row-gap: 20px;
  /* column-gap: 2px; */
  margin-top: 3rem;
  margin-top: -7px;
  padding: 0.5rem;
  margin-bottom: 0.7rem;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  line-height: 2rem;
  padding-bottom: 1rem;
  width: 70%;
`;

const BlogText = styled.div`
  margin-top: -7px;
  padding: 1.1rem;
  border-top: 8px solid var(--color-secondary);
`;
const H4 = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  margin-top: 0;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  :hover {
    color: var(--color-secondary);
  }
`;

const Para = styled.p`
  color: var(--color-grey-2);
  line-height: 2rem;
  padding-bottom: 1rem;
`;

function MyBlogs() {
  return (
    <Section>
      <BlogContent>
        <Title
          maintitle={BlogPageDetails.title}
          span={BlogPageDetails.titlespan}
          spanbg={BlogPageDetails.titleBg}
        />
        <Blogs>
          {BlogContentData.map((content, id) => {
            return (
              <Blog key={id}>
                <Image src={content.img} alt="" />
                <BlogText>
                  <H4>{content.title}</H4>
                  <Para>{content.desc}</Para>
                </BlogText>
              </Blog>
            );
          })}
        </Blogs>
      </BlogContent>
    </Section>
  );
}

export default MyBlogs;
