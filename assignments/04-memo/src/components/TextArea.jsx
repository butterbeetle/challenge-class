import styled from "styled-components";

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
export default function TextArea({ textareaRef }) {
  return (
    <Article>
      <ArticleH2>2024년 5월 24일 오전 11:20</ArticleH2>
      <ArticleTextarea ref={textareaRef}></ArticleTextarea>
    </Article>
  );
}
