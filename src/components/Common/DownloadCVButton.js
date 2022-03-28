import React from "react";
import styled from "styled-components";
import { AiOutlineDownload } from "react-icons/ai";
import { IconContext } from "react-icons";

const DownLoadSpan = styled.span`
  background-color: var(--color-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0.75rem;
`;

const DownLoadButton = styled.a`
  border-radius: 30px;
  width: fit-content;
  color: inherit;
  font-weight: 600;
  position: relative;
  border: 1px solid var(--color-secondary);
  align-self: flex-start;
  display: flex;
  align-items: center;
  overflow: hidden;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(100%);
    transition: all 0.4s ease-out;
    z-index: -1;
  }
  :hover {
    transition: all 0.4s ease-out;
    ::before {
      width: 100%;
      height: 100%;
      background-color: var(--color-secondary);
      transform: translateX(0);
      transition: all 0.4s ease-out;
    }
  }
`;

const style = {
  color: "white",
  size: "28px",
};

function DownloadCVButton() {
  return (
    <IconContext.Provider value={style}>
      <DownLoadButton>
        <span style={{ padding: "0 2rem" }}>Download CV</span>
        <DownLoadSpan>
          <AiOutlineDownload />
        </DownLoadSpan>
      </DownLoadButton>
    </IconContext.Provider>
  );
}

export default DownloadCVButton;
