//import routes
import { createBrowserRouter } from "react-router-dom";
//pages
import Home from "./pages/Home/Home";
import Layout from "./Layout";
import About from "./pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
