import styled from "styled-components";

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
  padding: 12px 16px;
  border-bottom: 1px solid rgb(230, 230, 230);
`;

const AsideHeaderButton = styled.button`
  color: #808080;
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
  padding: 12px 24px;
`;

const AsideLiH6 = styled.h6`
  font-size: 13px;
  font-weight: bold;
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

export default function HomePage() {
  return (
    <MainDiv>
      <Aside>
        <AsideHeader>
          <AsideHeaderButton>새 메모 작성하기</AsideHeaderButton>
          <AsideHeaderButton>삭제</AsideHeaderButton>
        </AsideHeader>
        <AsideUl>
          <AsideLi>
            <AsideLiH6>새로운 메모</AsideLiH6>
            <AsideLiTime>오전 10:36</AsideLiTime>
          </AsideLi>

          <AsideLi>
            <AsideLiH6>새로운 메모</AsideLiH6>
            <AsideLiTime>오전 10:36</AsideLiTime>
          </AsideLi>

          <AsideLi>
            <AsideLiH6>새로운 메모</AsideLiH6>
            <AsideLiTime>오전 10:36</AsideLiTime>
          </AsideLi>
        </AsideUl>
      </Aside>
      <Article>
        <ArticleH2>2024년 5월 24일 오전 11:20</ArticleH2>
        <ArticleTextarea>텍스트 맨이야</ArticleTextarea>
      </Article>
    </MainDiv>
  );
}
