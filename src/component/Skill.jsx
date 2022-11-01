import styled from "styled-components";

export default function Skill({ data }) {
  return (
    <Container>
      <img src={data.src} alt={data.alt} />
      <span className="name">{data.name}</span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 50%;
    height: 100%;
    background-color: white;
    border: 1px solid #d5d5d5;
    border-radius: 0.5rem;
    padding: 0.1rem;
    margin-bottom: 0.5rem;
  }

  .name {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;
