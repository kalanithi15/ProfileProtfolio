import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  animation: scaleAnim 1s ease-in-out;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  -webkit-animation: scaleAnim 1s ease-in-out;
  animation: scaleAnim 1s ease-in-out;
  @-webkit-keyframes scaleAnim {
    0% {
      -webkit-transform: translateY(-100%) scaleY(0);
      transform: translateY(-100%) scaleY(0);
    }
    100% {
      -webkit-transform: translateY(0) scaleY(1);
      transform: translateY(0) scaleY(1);
    }
  }
  @keyframes scaleAnim {
    0% {
      -webkit-transform: translateY(-100%) scaleY(0);
      transform: translateY(-100%) scaleY(0);
    }
    100% {
      -webkit-transform: translateY(0) scaleY(1);
      transform: translateY(0) scaleY(1);
    }
  }
`;
