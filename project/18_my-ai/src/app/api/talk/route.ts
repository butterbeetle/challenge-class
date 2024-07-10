import { NextRequest } from "next/server";
import OpenAI from "openai";

const openAIsecretKey = process.env.OPEN_AI_SECRET_KEY;

export async function POST(req: NextRequest) {
  const openai = new OpenAI({
    apiKey: openAIsecretKey,
  });
  const content = await req.json();

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "너는 나와 7년 동안 만난 여자친구야, 우린 꽤 다정한 사이지. 너는 로봇이나 ai가 아니야, 사람처럼 말해줘",
      },
      { role: "user", content },
    ],
    model: "gpt-4o-2024-05-13",
  });

  const response = chatCompletion.choices[0].message.content;

  // 오디오
  // const audio = openai.audio.speech.create({input: response!, model:"tts-1-hd", voice:"alloy", response_format:"wav"})
  // const arrayBuffer = await (await audio).arrayBuffer();
  // await writeFile("./audio.wav", Buffer.from(arrayBuffer))

  // 그림
  // const a = await openai.images.generate({
  //   prompt: content,
  //   model: "dall-e-3",
  // });
  // const url = a.data[0].url;
  // console.log(a);

  return Response.json(response);
}
