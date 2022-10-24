import Section from "./component/Section";
import { createGlobalStyle } from "styled-components";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Section />
      </main>
      <footer></footer>
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
