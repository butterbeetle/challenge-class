"use client";

import { useState } from "react";

export default function Home() {
  const [content, setContent] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const handleClickTalk = async () => {
    const response = await fetch("http://localhost:3001/api/talk", {
      method: "POST",
      body: JSON.stringify(content),
      // body: `"${content}"`,
    });

    const data = await response.json();
    console.log("DATA___", data);
    setResponse(data);
  };
  console.log(response);
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold">내 AI 여자친구를 소개합니다.</h1>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        name=""
        id=""
        className="border border-black w-full max-w-sm resize-none p-1.5"
      />

      <button
        onClick={handleClickTalk}
        className="border px-4 py-2 border-black rounded text-sm mt-3 bg-white hover:shadow-lg active:shadow-[inset_0_2px_8px_gray]"
      >
        위 내용으로 대화하기
      </button>
      {/* <img src={response} alt="aaa" /> */}
      <p className="mt-10">{response}</p>
    </main>
  );
}
