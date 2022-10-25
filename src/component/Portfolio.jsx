import styled from "styled-components";

export default function Portfolio({ data }) {
  return (
    <Container>
      <div>
        <div>
          <h2>{data.title}</h2>
          <p className="date">{data.date}</p>
          <p>
            <span className="title">깃허브</span>
            <a href={data.githubLink} className="content">
              {data.githubLink}
            </a>
          </p>
          <p>
            <span className="title">기술 스택</span>
            {data.skills.map((value, idx) => (
              <span key={idx} className="skill content">
                {value}
              </span>
            ))}
          </p>
        </div>

        <p>
          <span className="title">인원</span>
          <span className="content">{data.member}</span>
        </p>

        <p>
          <span className="title">기여</span>
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
      </div>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid #b5b5b5;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 2rem;
  background-color: #fcfcfc;
  user-select: none;

  h2 {
    color: #4284f3;
  }

  .date {
    color: gray;
    font-weight: bold;
  }

  .title {
    font-weight: bold;
    margin-right: 0.5rem;
  }

  .skill {
    margin-right: 0.5rem;
  }

  .content {
    color: #616161;
  }

  p {
    line-height: 2rem;
  }

  .thoughts {
    p {
      margin: 0.5rem 0;
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
