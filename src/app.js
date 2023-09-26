import React from "react";
import ReactDOM from "react-dom/client";
import "./../index.css";

import { createBrowserRouter,  RouterProvider, Outlet } from "react-router-dom";

// Components
import { Header } from "./components/Header";
import { Body } from "./components/BodyContainer";
import About from "./components/About";
import Contact from "./components/Contact";
import RestraurantMenu from "./components/RestraurantMenu";
import Error from "./components/Error";

const AppLayout = () => {
  return (
    <div className="app">
      {/* // Header */}
      <Header />
       <Outlet />
      {/* // Footer */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restraurants/:resId",
        element: <RestraurantMenu />,
      },
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
