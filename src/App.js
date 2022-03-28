import "./App.css";
import React, { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { BiAdjust } from "react-icons/bi";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/GlobalStyles";
import FloatMenu, {
  ThemeToggleButton,
} from "./components/FloatingMenu/FloatingMenu";
import Content from "./components/Content/Content";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const [option, selectOption] = useState(0);

  const getSelection = (id) => {
    console.log(id);
    selectOption(id);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className="App" style={{ display: "flex" }}>
        <GlobalStyle />
        <Content themeToggle={themeToggler} selectedOption={option} />
        <FloatMenu getSelectedOption={getSelection} />
        <ThemeToggleButton onClick={themeToggler}>
          <BiAdjust />
        </ThemeToggleButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
