import styled from "styled-components";
import { IconContext } from "react-icons";
import React, { useState } from "react";
import { menuContent } from "../../datasets/constants";

const FloatingButton = styled.div`
  right: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
  padding: 1rem;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "#F56692" : "#454e56")};
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.7rem 0;
  box-shadow: var(--box-shadow-1);
  &:hover {
    background-color: var(--color-secondary) !important;
    transition: all 0.4s ease-in-out;
  }
`;

const MenuWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  right: 3%;
`;

const style = { color: "white", size: "40px" };

const FloatMenu = ({ getSelectedOption }) => {
  const [numbers, setNumbers] = useState(menuContent);
  const increment = (idx) => {
    getSelectedOption(idx);
    setNumbers(
      numbers.map((number, id) => {
        if (id === idx) return { ...number, isSelected: true };
        return { ...number, isSelected: false };
      })
    );
  };

  return (
    <MenuWrapper>
      <IconContext.Provider value={style}>
        {numbers.map((number, id) => {
          return (
            <FloatingButton
              key={id}
              onClick={() => increment(id)}
              isSelected={number.isSelected}
            >
              {number.icon}
            </FloatingButton>
          );
        })}
      </IconContext.Provider>
    </MenuWrapper>
  );
};

export default FloatMenu;

export const ThemeToggleButton = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <IconContext.Provider value={style}>
      <FloatingButton
        style={{ position: "fixed", top: "5%" }}
        isSelected={toggle}
        onClick={() => {
          props.onClick();
          setToggle(false);
        }}
      >
        {props.children}
      </FloatingButton>
    </IconContext.Provider>
  );
};
