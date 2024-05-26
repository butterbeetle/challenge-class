import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "../pages/HomePage/HomePage";
import homePageLoader from "../pages/HomePage/HomePage.loader";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:memoId",
        element: <HomePage />,
        loader: homePageLoader,
      },
    ],
  },
]);

export default router;
