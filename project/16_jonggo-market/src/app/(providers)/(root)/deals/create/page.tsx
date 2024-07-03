"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Page from "@/components/Page";
import { supabase } from "@/contexts/supabase.context";
import { nanoid } from "nanoid";
import { useState } from "react";

function CreateDealPage() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleClickCreate = async () => {
    // 이미지 업로드
    console.log("IMAGE___", image);
    if (!image) return;

    const extension = image.name.split(".").slice(-1);
    const filename = `${nanoid()}.${extension}`;

    const response = await supabase.storage
      .from("deals")
      .upload(`/${filename}`, image);

    if (!response.data) return;

    const imageURL = `https://ervdrfvcecsipchcsrch.supabase.co/storage/v1/object/public/${response.data.fullPath}`;

    // 데이터 받아오기(join)
    // const { data } = await supabase
    //   .from("deals")
    //   .select("*, seller:sellerId(*)");
    // console.log("data", data);

    // 데이터 테이블에 insert
    const responseInsrt = await supabase
      .from("deals")
      .insert({ content, imageURL });
    console.log(responseInsrt);
  };

  return (
    <Page title="판매글 작성하기">
      <Input
        label="판매글 내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Input
        label="대표 이미지"
        type="file"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
      />
      <Button onClick={handleClickCreate}>작성하기</Button>
    </Page>
  );
}

export default CreateDealPage;

// npx supabase gen types typescript --project-id ervdrfvcecsipchcsrch --schema public > src/types/supabase.ts
// https://ervdrfvcecsipchcsrch.supabase.co/storage/v1/object/public/deals/undefined.jpg
// https://ervdrfvcecsipchcsrch.supabase.co/storage/v1/object/public/
