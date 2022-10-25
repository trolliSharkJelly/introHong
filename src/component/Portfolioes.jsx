import styled from "styled-components";
import { portfolioData } from "../data/data";
import Portfolio from "./Portfolio";

export default function Portfolioes() {
  return (
    <Container>
      <h2 className="year">2022</h2>

      <div className="item">
        {portfolioData.map((value, idx) => (
          <Portfolio key={idx} data={value} />
        ))}
      </div>
    </Container>
  );
}

const Container = styled.section`
  background-color: white;
  padding: 2rem;
  height: 100vh;
  overflow-y: scroll;

  .year {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;
