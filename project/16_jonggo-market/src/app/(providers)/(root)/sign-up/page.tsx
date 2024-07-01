"use client";

// 1. 훅 사용
// 2. window, document 브라우저에서 지원되는 api
// 3. 인터렉티브(이벤트)(온클릭)

import Button from "@/components/Button";
import Input from "@/components/Input";
import Page from "@/components/Page";
import { supabase } from "@/contexts/supabase.context";
import { ComponentProps } from "react";

function SignUpPage() {
  const signUpHandler: ComponentProps<"form">["onSubmit"] = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email: "example@email.com",
      password: "example-password",
    });

    console.log("DATA___", data);
  };

  return (
    <Page title="회원가입" width="sm">
      <form
        onSubmit={signUpHandler}
        className="max-w-sm mx-auto flex flex-col gap-y-8"
      >
        <div>
          <Input label="아이디" required />
          <Input label="비밀번호" required />
          <Input label="비밀번호 확인" required />
        </div>
        <Button>회원가입</Button>
      </form>
    </Page>
  );
}

export default SignUpPage;
