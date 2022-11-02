import styled from "styled-components";
import { Link } from "react-router-dom";
import { btnData } from "../data/data";
import { GrSun } from "react-icons/gr";
import { BsFillMoonFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { modeSlice } from "../slice/modeSlice";

export default function Nav() {
  const { mode } = useSelector((state) => state.mode);
  const dispatch = useDispatch();

  return (
    <Container>
      <button
        onClick={() => dispatch(modeSlice.actions.setMode({ mode: !mode }))}
      >
        {mode ? <BsFillMoonFill className="icon" /> : <GrSun />}
      </button>

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
  background-color: ${({ theme }) => theme.nav_color};

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.nav_color};
    border: 0;
    outline: 0;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    height: calc(40vh / 5);
  }

  button * {
    background-color: ${({ theme }) => theme.nav_color};
  }

  .icon {
    margin-right: 0.5rem;
    background-color: ${({ theme }) => theme.nav_color};
  }

  .link {
    width: 100%;
    background-color: ${({ theme }) => theme.nav_color};
    text-decoration: none;
    color: black;
    padding: 1rem;
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
