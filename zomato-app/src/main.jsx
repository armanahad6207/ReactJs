/* eslint-disable react/no-unknown-property */
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Homepage from "./Pages/Homepage";
import Listingpage from "./Pages/Listingpage";
import Restdetails from "./Pages/Restdetail";
import Booking from "./Pages/Booking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/listing/:mealId",
    element: <Listingpage />,
  },
  {
    path: "/details/:id",
    element: <Restdetails />,
  },
  {
    path: "/placeorder/:restdetails",
    element: <Booking />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
