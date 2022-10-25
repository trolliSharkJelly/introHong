import styled from "styled-components";
import { Link } from "react-router-dom";
import { btnData } from "../data/data";

export default function Nav() {
  return (
    <Container>
      {btnData.map((value, idx) => (
        <button key={idx}>
          <Link to={value.to} className="link">
            {value.icon}
            <span>{value.content}</span>
          </Link>
        </button>
      ))}
    </Container>
  );
}

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  background-color: #f5f5f5;

  button {
    display: flex;
    justify-content: center;
    background-color: #f5f5f5;
    border: 0;
    outline: 0;
    font-size: 0.9rem;
    font-weight: bold;
    cursor: pointer;
  }

  .link:hover {
    background-color: #d5d5d5;
    border-radius: 4px;
  }

  .icon {
    margin-right: 0.3rem;
  }

  .link {
    width: 100%;
    text-decoration: none;
    color: black;
    padding: 0.5rem;
  }

  @media (min-width: 1441px) {
    .link {
      font-size: 1.2rem;
    }

    button {
      font-size: 1.1rem;
    }

    .icon {
      margin-right: 0.5rem;
    }
  }
`;
