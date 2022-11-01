import About from "./pages/About";
import Nav from "./component/Nav";
import Histories from "./pages/Histories";
import Skills from "./pages/Skills";
import Portfolioes from "./pages/Portfolioes";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "./asset/style/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

export default function App() {
  const { mode } = useSelector((state) => state.mode);

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={mode ? darkTheme : lightTheme}>
          <GlobalStyle />
          <Main>
            <Nav />
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/history" element={<Histories />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/portfolio" element={<Portfolioes />} />
            </Routes>
          </Main>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.background_color};
  color: ${({ theme }) => theme.color};
}
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 10% 90%;
`;
