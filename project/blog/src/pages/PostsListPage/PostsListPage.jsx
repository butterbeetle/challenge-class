import { Link, useLoaderData } from "react-router-dom";

export default function PostsListPage() {
  const posts = useLoaderData();
  return (
    <div>
      <h1>PostsListPage</h1>
      <ol>
        {posts.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/posts/${id}`}>{title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
