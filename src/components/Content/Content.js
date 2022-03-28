import React, { useEffect } from "react";
import styled from "styled-components";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import MyBlogs from "../Blogs/MyBlogs";
import Portfolio from "../Portfolio/Portfolio";

const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

const renderSwitch = (selectedOption) => {
  switch (selectedOption) {
    case 0:
      return <Home />;
    case 1:
      return <About />;
    case 2:
      return <Portfolio />;
    case 3:
      return <MyBlogs />;
    case 4:
      return <Contact />;
    default:
      return null;
  }
};

function Content({ selectedOption }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return <Wrapper>{renderSwitch(selectedOption)}</Wrapper>;
}

export default Content;
