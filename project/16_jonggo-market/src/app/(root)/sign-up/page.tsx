import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import Page from "@/app/components/Page";

function SignUpPage() {
  return (
    <Page title="회원가입" width="sm">
      회원가입 폼이 위치할 곳
      <Input label="아이디" />
      <Input label="비밀번호" />
      <Input label="비밀번호 확인" />
      <Button>회원가입</Button>
    </Page>
  );
}

export default SignUpPage;
