import { useShallow } from "zustand/react/shallow";
import useLoginStore from "../zustand/login.store";

//zustand가 리렌더링하는 기준

function Button() {
  // zustand가 logIn,logOut 함수를 바라보는데 두 함수는 값이 변하질 않으므로 리렌더링 안됨
  // const logIn = useLoginStore((state) => state.logIn);
  // const logOut = useLoginStore((state) => state.logOut);

  // zustand가 state 전체를 바라보기 때문에 isLoggedIn이 변경되므로 리렌더링됨
  // const { logIn, logOut } = useLoginStore((state) => state);

  // 객체가 매번 새롭게 만들어지기 때문에 리렌더링됨
  // const { logIn, logOut } = useLoginStore((state) => ({
  //   logIn: state.logIn,
  //   logOut: state.logOut,
  // }));

  // 구조분해할당 해서 쓸거면 useShallow로 감싸주어야함
  const { logIn, logOut } = useLoginStore(
    useShallow((state) => ({
      logIn: state.logIn,
      logOut: state.logOut,
    }))
  );

  console.log("버튼 리렌더링");

  return (
    <div>
      <button onClick={logIn}>로그인하기</button>
      <button onClick={logOut}>로그아웃하기</button>
    </div>
  );
}

export default Button;
