import Link from "next/link";

type Post = {
  id: number;
  title: string;
};

async function getPosts() {
  console.log("Getting Posts....");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return data as Post[];
}

async function PostsListPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1>포스트 목록</h1>

      <nav>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export const revalidate = 5;

export default PostsListPage;
