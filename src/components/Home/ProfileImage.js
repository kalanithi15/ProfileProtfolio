import React from "react";
import styled from "styled-components";
import { HomePageDetails } from "../../datasets/constants";

const ImageWrapper = styled.div`
  border-radius: var(--br-sm-2);
  height: 90%;
  width: 68%;
  margin-left: 4rem;
  background-color: var(--color-black);
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
`;

const Image = styled.img`
  border-radius: var(--br-sm-2);
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s ease-in-out;
  filter: grayscale(100%);
  :hover {
    -webkit-filter: grayscale(0);
    filter: grayscale(0);
  }
`;

function ProfileImage() {
  return (
    <ImageWrapper>
      <Image src={HomePageDetails.profilePic} alt="" />
    </ImageWrapper>
  );
}

export default ProfileImage;
