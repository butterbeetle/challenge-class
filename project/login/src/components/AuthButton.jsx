import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "../redux/reducers/auth.reducer";

function AuthButton() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handlerClickButton = () => {
    // const action = { type: isLoggedIn ? LOG_OUT : LOG_IN };
    // dispatch(action);

    // Action Creator
    const action = isLoggedIn ? logOut() : logIn();
    dispatch(action);
  };

  return (
    <button onClick={handlerClickButton}>
      {isLoggedIn ? "로그아웃" : "로그인"}하기
    </button>
  );
}

export default AuthButton;
