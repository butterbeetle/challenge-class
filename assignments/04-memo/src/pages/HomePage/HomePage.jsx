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

export default function HomePage() {
  return (
    <MainDiv>
      <aside>사이드 맨</aside>
      <article>아티클 맨</article>
    </MainDiv>
  );
}
