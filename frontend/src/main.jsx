import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AllProjects from "./pages/AllProjects.jsx";
import LearnAboutMe from "./pages/LearnAboutMe.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-project",
        element: <AllProjects />,
      },
      {
        path: "/about-me",
        element: <LearnAboutMe />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
