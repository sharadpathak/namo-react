import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement(
      "h1",
      { id: "heading", style: { color: "red" } },
      "Hello World ! Shaad"
    ),React.createElement(
        "h2",
        { id: "heading", style: { color: "red" } },
        "Hello World ! Shaad"
      )]
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
