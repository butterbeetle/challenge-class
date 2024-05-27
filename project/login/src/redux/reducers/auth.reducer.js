export const LOG_IN = "auth/LOG_IN";
export const LOG_OUT = "auth/LOG_OUT";
export const INCREMENT = "INCREMENT";
// Action Creator
export const logIn = () => ({
  type: LOG_IN,
});
export const logOut = () => ({
  type: LOG_OUT,
});

export const increment = (value) => ({ type: INCREMENT, payload: value });

const initialState = {
  isLoggedIn: false,
};

function authReducer(prevState = initialState, action) {
  //작업의 종류에 따라서 다른 작업을 해야 해.

  switch (action.type) {
    case LOG_IN:
      // 뚝딱뚝딱
      // 작업이 다 반영된 상태를 리턴해 주면 됨
      return { ...prevState, isLoggedIn: true };
    case LOG_OUT:
      // 뚝딱뚝딱
      // 작업이 다 반영된 상태를 리턴해 주면 됨
      return { ...prevState, isLoggedIn: false };
    default:
      return prevState;
  }
}

export default authReducer;
