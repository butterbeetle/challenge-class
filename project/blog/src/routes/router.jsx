import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "../pages/HomePage/HomePage";
import PostDetailPage from "../pages/PostDetailPage/PostDetailPage";
import postDetailPageLoader from "../pages/PostDetailPage/PostDetailPage.loader";
import PostsListPage from "../pages/PostsListPage/PostsListPage";
import postListPageLoader from "../pages/PostsListPage/PostsListPage.loader";

// plain objects 방식 권장
// path, element 필수
// loader = 페이지가 그려지기 전에 할 것
// Await 컴포넌트(react-router) 공부해보기
const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: <PostsListPage />,
        loader: postListPageLoader,
      },
      {
        // : 뒤에 이름을 붙여줌(동적)
        path: "/posts/:postId",
        element: <PostDetailPage />,
        loader: postDetailPageLoader,
      },
    ],
  },
]);

export default router;
