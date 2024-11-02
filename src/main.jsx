import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import {
  Actors,
  MovieInformation,
  Movies,
  NavBar,
  Profile,
} from "./components/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "movie/:id",
    element: <MovieInformation />,
  },
  {
    path: "movies",
    element: <Movies />,
  },
  {
    path: "actors/:id",
    element: <Actors />,
  },
  {
    path: "profile/:id",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
