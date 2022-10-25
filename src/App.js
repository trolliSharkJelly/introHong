import Section from "./component/Section";
import styled, { createGlobalStyle } from "styled-components";
import Nav from "./component/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/About";
import Skill from "./component/Skill";
import Portfolioes from "./component/Portfolioes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Main>
          <Section />
          <Nav />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/portfolio" element={<Portfolioes />} />
          </Routes>
        </Main>
        <footer></footer>
      </BrowserRouter>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 30% 7% 63%;
`;
