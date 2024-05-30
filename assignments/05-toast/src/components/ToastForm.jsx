import { useEffect, useRef } from "react";
import ToastInput from "./ToastInput";

export default function ToastForm() {
  const inputRef = useRef([]);

  useEffect(() => {
    if (inputRef.current[0]) inputRef.current[0].focus();
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("SUBMIT___");
    console.log(inputRef.current[0].value);
    console.log(inputRef.current[1].value);
    console.log(inputRef.current[2].value);
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col  gap-y-5">
      <ToastInput
        inputRef={(el) => (inputRef.current[0] = el)}
        id="title"
        label="제목 (필수)"
        defaultValue="Scheduled: Catch up"
      />
      <ToastInput
        inputRef={(el) => (inputRef.current[1] = el)}
        id="content"
        label="내용 (필수)"
        defaultValue={new Date()}
      />
      <ToastInput
        inputRef={(el) => (inputRef.current[2] = el)}
        id="time"
        label="노출 시간(ms) (선택)"
        type="number"
        defaultValue={2000}
      />
      <button className="bg-black text-white rounded-md py-3 hover:bg-black/80 active:bg-black/70 transition-colors">
        토스트 띄우기
      </button>
    </form>
  );
}
