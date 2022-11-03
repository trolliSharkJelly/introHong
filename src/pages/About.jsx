import styled from "styled-components";
import user_profile from "../asset/image/user_profile.jpeg";
import { MdEmail } from "react-icons/md";
import { MdOutlineContentCopy } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Section() {
  return (
    <Container>
      <img
        className="profile-image"
        src={user_profile}
        alt="홍미경 프로필 사진"
      />

      <h1>
        안녕하세요,
        <br />
        프론트엔드 개발자 홍미경입니다.
      </h1>

      <article>
        <p className="intro">
          자신의 <strong className="growth">성장</strong>을 위해 새로운 것에
          대한 경험을 두려워하지 않습니다.
        </p>
        <p className="intro">
          주어진 목표와 업무가 있다면 포기하지 않고 완수합니다. 포기하지 않음은
          곧 상대방에게 주는 <strong className="trust">신뢰</strong>
          이며, 자신과의 <strong className="promise">약속</strong>이라 생각하기
          때문입니다.
        </p>
        <p className="intro">
          사용자가 웹에서 제공하는 정보를 차별 및 제한 없이{" "}
          <strong className="equal">동등</strong>하게 이용할 수 있는 사이트를
          만들고 싶습니다.
        </p>
      </article>

      <article className="contacts">
        <div className="contact">
          <MdEmail className="icon" />
          <span>hongmikyeong11@gmail.com</span>

          <span>
            <CopyToClipboard text="hongmikyeong11@gmail.com">
              <MdOutlineContentCopy className="copy-icon" />
            </CopyToClipboard>
          </span>
        </div>

        <article className="contact">
          <AiFillGithub className="icon" />
          <a href="https://github.com/trolliSharkJelly">
            https://github.com/trolliSharkJelly
          </a>
        </article>
      </article>
    </Container>
  );
}

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;

  & * {
    user-select: none;
  }

  .profile-image {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
  }

  h1 {
    text-align: center;
    font-size: 2rem;
    line-height: 2.5rem;
  }

  .intro {
    font-size: 1.3rem;
    line-height: 2.5rem;
    text-align: center;
  }

  .growth,
  .trust,
  .promise,
  .equal {
    padding: 0.2rem;
    border-radius: 4px;
  }

  .growth {
    background-color: #e39b9b;
  }

  .trust {
    background-color: #e9bb58;
  }

  .promise {
    background-color: #749f82;
  }

  .equal {
    background-color: #a6aee8;
  }

  .contact {
    display: flex;
    align-items: center;
    line-height: 2.5rem;
    font-size: 1.2rem;
  }

  .icon {
    margin-right: 1rem;
    font-size: 1.5rem;
  }

  .copy-icon {
    margin-left: 0.5rem;
    cursor: pointer;
  }

  @media (min-width: 1441px) {
    .profile-image {
      width: 10rem;
      height: 10rem;
    }

    h1 {
      font-size: 3rem;
      line-height: 4rem;
    }

    .intro,
    .contact {
      font-size: 1.8rem;
      line-height: 3.5rem;
    }

    .icon {
      font-size: 2rem;
    }
  }
`;
