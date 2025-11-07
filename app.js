 import React from "react";
 import ReactDOM from "react-dom/client";
 
 const parent = React.createElement("div", { id: "parent", key: "parent" }, [
  React.createElement(
    "div",
    { id: "child1", key: "child1" },
    React.createElement("h1", {}, "This Is H1 Nested")
  ),
  React.createElement(
    "div",
    { id: "child2", key: "child2" },
    React.createElement("h2", {}, "This Is H2 Nested")
  )
]);

      const jsxparent= <h1 id="parent"> This Is React Using JSX</h1>

      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(parent);
      root.render(jsxparent);
