import { SDeal } from "@/schemas/Deal.schema";
import Link from "next/link";
import DealCard from "../components/DealCard";
import Page from "../components/Page";

const deal: SDeal = {
  id: 111,
  title: "춘향골 만 원 한 박스 판매함",
  imgURL:
    "https://dnvefa72aowie.cloudfront.net/origin/article/202406/0c3fc4e63d2251a9348b80ddd5a087918089f7b02ec374e49cf9c87a4461fde9_0.webp?f=webp&q=95&s=1440x1440&t=inside",
  location: "서울 강동구 명일제2동",
  price: 9000,
  likesCount: 54,
};

// Ctrl + T 로 page 검색할 때 용이하게 Home -> HomePage로 변경함
export default function HomePage() {
  return (
    <Page title="전체 판매글">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8">
        {Array(9)
          .fill(0)
          .map((_, index) => (
            <li key={index}>
              <Link href={`/deals/${deal.id}`}>
                <DealCard deal={deal} />
              </Link>
            </li>
          ))}
      </ul>
    </Page>
  );
}

// 내부링크가 많이 얽혀있는 사이트는
// 그렇지 않은것 보다 높지만 그렇게 크진 않음
// 외부링크는 SEO 점수가 높아서
// 여기저기 커뮤니티에 내 사이트 올려놓으면 좋음
