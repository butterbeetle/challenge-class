import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

const endpoint = "https://jsonplaceholder.typicode.com/posts";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

function Posts() {
  const { data: posts = [] } = useQuery<AxiosResponse<Post[]>, number, Post[]>({
    queryKey: ["posts"],
    queryFn: () => axios.get(endpoint),
    select: (queryFnReturn) => queryFnReturn.data, // queryFn 결과를 한번 더 가공할 수 있음
  });

  return (
    <ol>
      {posts.map(({ id, title }) => (
        <li key={id}>
          [{id}] {title}
        </li>
      ))}
    </ol>
  );
}

export default Posts;
