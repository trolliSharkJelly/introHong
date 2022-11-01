import styled from "styled-components";
import History from "../component/History";
import { historyData } from "../data/data";

export default function Histories() {
  return (
    <Container>
      <h2 className="title">이력</h2>
      {historyData.map((value, index) => (
        <History key={index} data={value} />
      ))}
    </Container>
  );
}

const Container = styled.section`
  padding: 4rem;
  height: 100vh;
  overflow-y: scroll;

  .title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;
