import styled from "styled-components";

export default function Skill() {
  return (
    <Container>
      <h1>해당 페이지는 작업 중인 페이지입니다.</h1>
      <h3>현재 페이지 : '기술' 페이지</h3>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 4rem;
  }

  h3 {
    font-size: 2rem;
    margin-top: 1rem;
    color: #616161;
  }
`;
