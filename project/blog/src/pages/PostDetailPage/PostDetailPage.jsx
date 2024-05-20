import { useParams } from "react-router-dom";

export default function PostDetailPage() {
  const { postId } = useParams();

  return <div>PostsDetailPage {postId}</div>;
}
