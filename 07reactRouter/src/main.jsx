import React from "react";
import ReactDOM from "react-dom/client";
import {
  // Route,
  RouterProvider,
  createBrowserRouter,
  // createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github from "./components/Github/Github";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "user/:userId",
        element: <User />,
      },
      {
        path: "github",
        element: <Github />,
      },
    ],
  },
]);

//  create route using second method

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="home" element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//     </Route>
//   )
// );
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
