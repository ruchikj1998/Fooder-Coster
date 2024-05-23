import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
    "h1", 
    {key: "h1"}, 
    "Hello world from react js h1."
);


const heading2 = React.createElement(
    "h2", 
    {key: "h2"}, 
    "Hello world from react js h2."
);

const child = React.createElement(
    "div",
    {id: "child1", key: "ch1"},
    [heading1, heading2]
);

const child2 = React.createElement(
    "div",
    {id: "child2", key: "ch2"},
    [heading1, heading2]
);

const parent = React.createElement(
    "div",
    {id: "parent"},
    [child, child2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);