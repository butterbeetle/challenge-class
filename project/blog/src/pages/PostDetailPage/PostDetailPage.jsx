import { useLoaderData } from "react-router-dom";

export default function PostDetailPage() {
  const post = useLoaderData();
  const { title, body } = post;

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}
