import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function LogInPage() {
  const nav = useNavigate();
  const { mutateAsync: LogIn } = useMutation({
    mutationFn: (data) => api.auth.logIn(data),
  });

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleClickSignUp = async (e) => {
    try {
      const email = emailInputRef.current.value;
      const password = passwordInputRef.current.value;
      const data = { email, password };

      await LogIn(data);

      alert("로그인 완료");
      nav("/");
    } catch (error) {
      alert("로그인 실패");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <input ref={emailInputRef} placeholder={"이메일을 입력해"} type="email" />
      <input
        ref={passwordInputRef}
        placeholder={"비밀번호를 입력해"}
        type="password"
      />
      <button onClick={handleClickSignUp}>로그인</button>
    </div>
  );
}

export default LogInPage;
