import { SDeal } from "@/schemas/Deal.schema";
import Image from "next/image";

interface DealCardProps {
  deal: SDeal;
}

function DealCard({ deal }: DealCardProps) {
  const { title, imgURL, likesCount, location, price } = deal;

  /**
   * router.push("/") 이런식으로 하면 SEO에 안좋음
   * 왜냐면 링크태그가 없어서
   * 검색엔진은 링크태그를 타고 들어가고 타고 들어가고 이럼
   */
  return (
    <div>
      <div className="relative aspect-square">
        <Image src={imgURL} alt={title} fill className="object-cover" />
      </div>
      <h6>{title}</h6>
      <div>{price}</div>
      <div>{location}</div>
      <div>{likesCount}</div>
    </div>
  );
}

export default DealCard;

// next Image는 .next Image/Cache -> resizing 해줌
// fill을 쓰면 채우긴 채우는데 자기
