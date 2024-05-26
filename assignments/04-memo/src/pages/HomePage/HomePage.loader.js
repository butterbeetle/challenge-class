import store from "../../redux/store/store";

export default function homePageLoader({ params }) {
  const { memoId } = params;

  const { memoLists } = store.getState().memo;
  const memo = memoLists.find((memo) => memo.id === memoId);

  return memo ? memo.id : "";
}
