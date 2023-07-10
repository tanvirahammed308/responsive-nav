import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import About from "../Page/About";
import Contact from '../Page/Contact'
import Home from "../Home/Home/Home";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
     
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
      ],
    },
  ]);