import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/posts">포스트 목록 페이지</Link>
      <br />
      <Link to="/posts/123">포스트 상세 페이지</Link>
    </div>
  );
}
