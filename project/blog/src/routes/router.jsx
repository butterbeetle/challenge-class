import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import PostDetailPage from "../pages/PostDetailPage/PostDetailPage";
import PostsListPage from "../pages/PostsListPage/PostsListPage";

// path, element 필수
// plain objects 방식 권장
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/posts",
    element: <PostsListPage />,
  },
  {
    // : 뒤에 이름을 붙여줌(동적)
    path: "/posts/:postId",
    element: <PostDetailPage />,
  },
]);

export default router;
