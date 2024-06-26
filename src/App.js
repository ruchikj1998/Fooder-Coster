import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";



const Footer = () => (
    <div className="footer">
        <a href="#">Login</a>
    </div>
);

const Main = () => (
    <div className="container">
        <Header />
        <Body />
        <Footer />
    </div>
);

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <Contact />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);