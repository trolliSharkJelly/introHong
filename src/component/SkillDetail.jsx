import styled from "styled-components";

export default function SkillDetail({ data }) {
  return (
    <Container>
      <img src={data.src} alt={data.alt} />
      <div>
        <span className="name">{data.name}</span>
        <p className="explain">{data.explain}</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d5d5d5;
  background-color: ${({ theme }) => theme.box_color};
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  padding: 1rem;

  & * {
    background-color: ${({ theme }) => theme.box_color};
  }

  img {
    width: 10%;
    background-color: white;
    border: 1px solid #d5d5d5;
    border-radius: 0.5rem;
    padding: 0.1rem;
    margin-right: 1rem;
  }

  .name {
    font-size: 1.1rem;
    font-weight: 600;
  }

  .explain {
    font-size: 1.1rem;
    margin-top: 0.5rem;
  }
`;
