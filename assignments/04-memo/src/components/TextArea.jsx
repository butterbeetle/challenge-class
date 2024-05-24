import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updateMemo } from "../redux/slices/memo.slice";
import { arrayToDate } from "../utils/formatDate";

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
export default function TextArea() {
  const dispatch = useDispatch();
  const { memoLists } = useSelector((state) => state.memo);

  const { content, createdAt } = memoLists.filter((memo) => memo.isClicked)[0];

  const [userInputContent, setUserInputContent] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) textareaRef.current.focus();
  }, []);

  useEffect(() => {
    setUserInputContent(content);
  }, [content]);

  const onChangeHandler = (value) => {
    dispatch(updateMemo({ memoContent: value }));
  };

  return (
    <Article>
      <ArticleH2>{arrayToDate(createdAt, "full")}</ArticleH2>
      <ArticleTextarea
        ref={textareaRef}
        value={userInputContent}
        onChange={(e) => onChangeHandler(e.target.value)}
      ></ArticleTextarea>
    </Article>
  );
}
