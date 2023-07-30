import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/App";
import reportWebVitals from "./reportWebVitals";
import Main from "./routes/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Project from "./routes/Project";
import About from "./routes/About";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/main", element: <Main /> },
  { path: "/project", element: <Project /> },
  { path: "/about", element: <About /> },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode className="h-full w-full">
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
