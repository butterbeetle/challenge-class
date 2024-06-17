import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      호므페이지
      <Link href={"/posts"}>포스트 페이지로 가기(Link)</Link>
      <a href="/posts">포스트 페이지로 가기(a)</a>
    </main>
  );
}

/**
 * 맨 처음에 페이지에 접속했을 때
 * -> HTML 어디서 오지? SSR 서버에서 그려서 온다
 * -> 그려진 화면 내에서 Link태그로 페이지 이동했을 때 => 새로운 HTML 어디서 그리지? => 클라이언트에서 그림
 * -> 그려진 화면 내에서 a 태그로 페이지 이동했을 때 =>
 *
 * 처음 불러올 때는 SSR로 불러온다 -> 왜? -> SEO 중요하니까
 * 그 다음에 매번 서버와 통신한다? -> 안할 수 있으면 좋다 -> 그 다음부터는 기본적으로 CSR로 계속 그려나간다
 * -> 이렇게 하려면 Next가 제공하는 Link 태그 사용해야한다.
 */
