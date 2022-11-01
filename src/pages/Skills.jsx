import styled from "styled-components";
import Skill from "../component/Skill";
import SkillDetail from "../component/SkillDetail";
import { skillData } from "../data/data";
import { TbListDetails } from "react-icons/tb";
import { useState } from "react";

export default function Skills() {
  const [isDetail, setIsDetail] = useState(false);

  return (
    <Container>
      <header>
        <h2 className="title">기술</h2>
        <button onClick={() => setIsDetail((prev) => !prev)}>
          <TbListDetails className="icon" />
          {isDetail ? "간략하게 보기" : "자세히 보기"}
        </button>
      </header>

      <div className="skills">
        {isDetail || (
          <div className="skill">
            {skillData.map((value, index) => (
              <Skill key={index} data={value} />
            ))}
          </div>
        )}

        {isDetail && (
          <div className="skillDetail">
            {skillData.map((value, index) => (
              <SkillDetail key={index} data={value} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}

const Container = styled.section`
  height: 100vh;
  padding: 4rem 4rem 0 4rem;
  overflow-y: scroll;

  header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }

  .title {
    font-size: 2rem;
    margin-right: 1rem;
  }

  button {
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.skill_button_color};
    border: 1px solid #e6e6e6;
    border-radius: 0.5rem;
    padding: 0.5rem;
    font-weight: 500;
  }

  button * {
    background-color: ${({ theme }) => theme.skill_button_color};
  }

  .icon {
    font-size: 1.5rem;
    margin-right: 0.5rem;
    background-color: ${({ theme }) => theme.skill_button_color};
  }

  .skills {
    border: 1px solid ${({ theme }) => theme.skill_border_color};
    border-bottom: none;
    border-radius: 1rem 1rem 0 0;
    height: 100%;
  }

  .skill {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    row-gap: 2rem;
    margin-top: 2rem;
  }

  .skillDetail {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    margin: 2rem;
  }
`;
