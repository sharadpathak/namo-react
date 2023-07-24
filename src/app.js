import React from "react";
import ReactDOM from "react-dom/client";
import "./../index.css";

// Components
import { Header } from "./components/Header";
import { Body } from "./components/BodyContainer";

const AppLayout = () => {
  return (
    <div className="app">
      {/* // Header */}
      <Header />
      <Body />
      {/* // Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
