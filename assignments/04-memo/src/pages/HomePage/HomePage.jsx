import styled from "styled-components";
import createUuid from "../../utils/myUuid";

const MainDiv = styled.main`
  display: grid;
  grid-template-columns: 240px 1fr;
  background-color: rgb(255, 255, 255);
  margin: 0px auto;
  height: 500px;
  width: 100%;
  max-width: 1024px;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
`;

const Aside = styled.aside`
  border-right: 1px solid rgb(230, 230, 230);
`;

const AsideHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
  border-bottom: 1px solid rgb(230, 230, 230);
`;

const AsideHeaderButton = styled.button`
  color: #808080;

  &:hover {
    color: #121212;
    font-weight: bold;
  }
`;

const AsideUl = styled.ul`
  padding: 20px 12px;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;

const AsideLi = styled.li`
  box-sizing: border-box;
  height: 56px;
  padding: 10px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 4px;
  cursor: pointer;

  background-color: #ffe07f;
`;

const AsideLiH6 = styled.h6`
  font-size: 13px;
  font-weight: bold;
  height: 14px;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
`;

const AsideLiTime = styled.time`
  font-size: 12px;
  color: #404040;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
`;

const ArticleH2 = styled.h2`
  margin: 0 auto 24px;
  width: fit-content;
  color: #808080;
  font-size: 10px;
`;

const ArticleTextarea = styled.textarea`
  all: unset;
  flex-grow: 1;
  font-size: 15px;
  line-height: 1.66;
`;

const DATAS = [
  {
    content: "long eng long eng long eng long eng long eng ",
    createdAt: "오전 10:36",
  },
  {
    content: "오호오호오호오호오호오호오호오호",
    createdAt: "오전 11:36",
  },
  {
    content: "오마에와 모 신데이루. 나.. 나니잇 으어어억",
    createdAt: "오전 12:36",
  },
];

export default function HomePage() {
  return (
    <MainDiv>
      <Aside>
        <AsideHeader>
          <AsideHeaderButton>새 메모 작성하기</AsideHeaderButton>
          <AsideHeaderButton>삭제</AsideHeaderButton>
        </AsideHeader>
        <AsideUl>
          {DATAS.map(({ content, createdAt }) => (
            <AsideLi key={createUuid()}>
              <AsideLiH6>{content}</AsideLiH6>
              <AsideLiTime>{createdAt}</AsideLiTime>
            </AsideLi>
          ))}
        </AsideUl>
      </Aside>
      <Article>
        <ArticleH2>2024년 5월 24일 오전 11:20</ArticleH2>
        <ArticleTextarea></ArticleTextarea>
      </Article>
    </MainDiv>
  );
}
