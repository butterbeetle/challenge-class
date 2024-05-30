import useLoginStore from "../zustand/login.store";

function Button() {
  const logIn = useLoginStore((state) => state.logIn);
  const logOut = useLoginStore((state) => state.logOut);

  return (
    <div>
      <button onClick={logIn}>로그인하기</button>
      <button onClick={logOut}>로그아웃하기</button>
    </div>
  );
}

export default Button;
