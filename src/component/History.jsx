import styled from "styled-components";

export default function History({ data }) {
  return (
    <Container>
      <div>
        <h2 className="company">{data.company}</h2>
        <h3 className="company-explain">{data.company_explain}</h3>
        <p className="date">{data.date}</p>
      </div>

      <div>
        <ul>
          {data.explain.map((value, index) => (
            <li key={index}>{`- ${value}`}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  grid-template-columns: 35% 65%;
  align-items: center;
  border: 1px solid #b5b5b5;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.box_color};

  & * {
    background-color: ${({ theme }) => theme.box_color};
  }

  .company {
    font-size: 1.6rem;
    margin-bottom: 0.2rem;
    color: #4284f3;
  }

  .company-explain {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  .date {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.box_gray_color};
  }

  li {
    list-style: none;
    line-height: 1.8rem;
    font-size: 1.1rem;
  }
`;
