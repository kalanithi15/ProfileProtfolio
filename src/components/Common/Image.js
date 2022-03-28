import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 300px;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 5px;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  cursor: pointer;

  :hover {
    -webkit-filter: grayscale(0);
    filter: grayscale(0);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.8);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.8);
  }
  @media only screen and (max-width: 1250px) {
    height: 250px;
  }
  @media only screen and (max-width: 800px) {
    height: 200px;
  }
`;
