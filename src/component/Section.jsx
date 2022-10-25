import styled from "styled-components";
import user_profile from "../asset/image/user_profile.png";
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

      <h1 className="select-none">
        안녕하세요,
        <br />
        프론트엔드 개발자가 되고 싶은
        <br />
        홍미경입니다.
      </h1>

      <article>
        <p className="intro select-none">
          주어진 목표와 업무가 있다면 포기하지 않고 완수합니다. 포기하지 않음은
          곧 상대방에게 주는 신뢰이며, 자신과의 약속이라 생각하기 때문입니다.
        </p>
        <p className="intro select-none">
          사용자가 웹에서 제공하는 정보를 차별 및 제한 없이 동등하게 이용할 수
          있는 사이트를 만들고 싶습니다.
        </p>
        <p className="intro select-none">
          프론트엔드 개발자를 지원하기 위해 6개월 과정의 코드스테이츠 부트캠프를
          수료했으며, 더 많은 지식을 얻고자 타입스크립트를 공부 중입니다.
        </p>
      </article>

      <article className="contacts">
        <div className="contact">
          <MdEmail className="icon mail-icon" />
          <span>hongmikyeong11@gmail.com</span>
          <span>
            <CopyToClipboard text="hongmikyeong11@gmail.com">
              <MdOutlineContentCopy className="copy-icon" />
            </CopyToClipboard>
          </span>
        </div>

        <div className="contact">
          <AiFillGithub className="icon github-icon" />
          <a
            href="https://github.com/trolliSharkJelly"
            className="contact_link"
          >
            https://github.com/trolliSharkJelly
          </a>
        </div>
      </article>
    </Container>
  );
}

const Container = styled.section`
  border: 1px solid black;

  width: 35%;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 2rem;

  .profile-image {
    width: 8rem;
    height: 8rem;
    border: 1px solid black;
    border-radius: 50%;
  }

  h1 {
    text-align: center;
  }

  .intro {
    margin-bottom: 0.5rem;
    line-height: 1.5rem;
  }

  .contact {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    line-height: 1.5rem;
    color: #616161;
  }

  .contact_link {
    text-decoration: none;
    color: #616161;
  }

  .icon {
    margin-right: 1rem;
    font-size: 1.5rem;
  }

  .mail-icon {
    color: #4284f3;
  }

  .copy-icon {
    margin-left: 0.5rem;
    cursor: pointer;
  }

  .github-icon {
    color: black;
  }

  .select-none {
    user-select: none;
  }

  @media (min-width: 1441px) {
    h1 {
      font-size: 2rem;
    }

    .intro,
    .contact {
      font-size: 1.5rem;
      line-height: 2.5rem;
    }

    .icon {
      font-size: 2rem;
    }
  }
`;
