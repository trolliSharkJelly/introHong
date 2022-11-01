import styled from "styled-components";

export default function Portfolio({ data }) {
  return (
    <Container>
      <div>
        <h2>{data.title}</h2>
        <p className="date">{data.date}</p>
        <p>
          <span className="title">{data.introduce}</span>
        </p>
        <p>
          <span className="title simple">깃허브</span>
          <a href={data.githubLink} className="content">
            {data.githubLink}
          </a>
        </p>
        <p>
          <span className="title simple">사용 기술</span>
          {data.skills.map((value, idx) => (
            <Skill key={idx} className="skill content">
              {value.name}
            </Skill>
          ))}
        </p>
      </div>

      <p>
        <span className="title simple">인원</span>
        <span className="content">{data.member}</span>
      </p>

      <p>
        <span className="title simple">기여</span>
        <span className="content">{data.contribute}</span>
      </p>

      {data.thoughts && (
        <div className="thoughts">
          <hr />
          <p className="title">
            해당 포트폴리오를 개발하게 된 계기가 어떻게 되나요?
          </p>
          <p className="content">{data.thoughts.how}</p>

          <p className="title">개발 당시 어려웠던 점은 무엇인가요?</p>
          <p className="content">{data.thoughts.difficult}</p>

          <p className="title">개발 후 느낀 점은 무엇인가요?</p>
          <p className="content">{data.thoughts.feeling}</p>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid #b5b5b5;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.box_color};
  user-select: none;

  & * {
    background-color: ${({ theme }) => theme.box_color};
  }

  h2 {
    font-size: 1.6rem;
    color: #4284f3;
  }

  .date {
    color: ${({ theme }) => theme.box_date_color};
    font-weight: bold;
  }

  .title {
    font-weight: bold;
    font-size: 1.1rem;
    margin-right: 0.5rem;
  }

  .simple {
    background-color: ${({ theme }) => theme.portfolio_title_bgColor};
    padding: 0.2rem;
    border: 1px solid ${({ theme }) => theme.portfolio_title_border};
    border-radius: 5px;
    font-size: 1.1rem;
    line-height: 2.5rem;
  }

  /* .skill {
    margin-right: 0.5rem;
    border: 1px solid white;
    border-radius: 4px;
    padding: 0.2rem;
    color: ${(props) => props.inputColor};
  } */

  .content {
    color: ${({ theme }) => theme.box_gray_color};
  }

  p {
    line-height: 2rem;
  }

  .thoughts {
    .title {
      color: ${({ theme }) => theme.portfolio_title_color};
    }

    p {
      margin: 0.5rem 0;
      font-size: 1.1rem;
    }
    hr {
      margin: 1rem 0;
      border: 0;
      height: 1px;
      background-color: #b5b5b5;
    }
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Skill = styled.span`
  margin-right: 0.5rem;
  border-radius: 4px;
  padding: 0.2rem;
  background-color: ${({ theme }) => theme.portfolio_skill_bgColor};
`;
