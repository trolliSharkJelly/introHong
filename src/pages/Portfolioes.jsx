import styled from "styled-components";
import { portfolioData } from "../data/data";
import Portfolio from "../component/Portfolio";

export default function Portfolioes() {
  return (
    <Container>
      <h2 className="year">포트폴리오</h2>

      <div className="item">
        {portfolioData.map((value, idx) => (
          <Portfolio key={idx} data={value} />
        ))}
      </div>
    </Container>
  );
}

const Container = styled.section`
  padding: 4rem;
  height: 100vh;
  overflow-y: scroll;

  .year {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;
