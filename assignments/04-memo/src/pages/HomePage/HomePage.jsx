import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import TextArea from "../../components/TextArea";
import { addMemo, clickedMemo } from "../../redux/slices/memo.slice";
import { arrayToDate, currentDateToArray } from "../../utils/formatDate";
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

  background-color: ${({ $isClicked }) => ($isClicked ? "#ffe07f" : "white")};
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

export default function HomePage() {
  const dispatch = useDispatch();
  const { memoLists } = useSelector((state) => state.memo);

  const clickedMemoHandler = (id) => {
    dispatch(clickedMemo({ memoId: id }));
  };

  const addMemoHandler = () => {
    dispatch(
      addMemo({
        id: createUuid(),
        content: "",
        createdAt: currentDateToArray(),
        isClicked: true,
      })
    );
  };

  // const deleteMemoHandler = () => {
  //   console.log("DELETE CLCIK");

  //   dispatch(deleteMemo({id}))
  // }

  return (
    <MainDiv>
      <Aside>
        <AsideHeader>
          <AsideHeaderButton onClick={addMemoHandler}>
            새 메모 작성하기
          </AsideHeaderButton>
          <AsideHeaderButton>삭제</AsideHeaderButton>
        </AsideHeader>
        <AsideUl>
          {memoLists.map(({ id, content, createdAt, isClicked }) => {
            const string =
              content.length > 14 ? `${content.substring(0, 14)}...` : content;
            return (
              <AsideLi
                key={id}
                onClick={() => clickedMemoHandler(id)}
                $isClicked={isClicked}
              >
                <AsideLiH6>{string || "새로운 메모"}</AsideLiH6>
                <AsideLiTime>{arrayToDate(createdAt, "date")}</AsideLiTime>
              </AsideLi>
            );
          })}
        </AsideUl>
      </Aside>
      <TextArea />
    </MainDiv>
  );
}
