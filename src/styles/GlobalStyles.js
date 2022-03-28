import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --color-primary: #191d2b;
    --color-secondary: #27AE60;
    --color-white: #FFFFFF;
    --color-black: #000;
    --color-grey0: #f8f8f8;
    --color-grey-1: #dbe1e8;
    --color-grey-2: #b2becd;
    --color-grey-3: #6c7983;
    --color-grey-4: #454e56;
    --color-grey-5: #2a2e35;
    --color-grey-6: #12181b;
    --br-sm-2: 14px;
    --box-shadow-1: 0 3px 15px rgba(0,0,0,.3);
}

* {
  box-sizing: border-box;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-size: 1.1rem;
    transition: all 0.4s ease-in-out;
    h1{
        font-size: 2rem;
        font-weight: 500;
    }

    p {
        font-size: 1rem;
        color: var(--white);
    }

}

.icon{
    color: ${({ theme }) => theme.text};
  font-size: 30px;
}

`;

export const lightTheme = {
  body: "#FFF",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#363537",
};

export const darkTheme = {
  body: "#454e56",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#999",
};
