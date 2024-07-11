import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";

const Grocery = lazy(() => {
    return import("./components/Grocery")
});

const Footer = () => (
    <div className="footer">
        <a href="#">Login</a>
    </div>
);

const Main = () => (
    <div className="container">
        <Header />
        <Outlet />
        <Footer />
    </div>
);

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/reataurants/:resID",
                element: <RestaurantMenu />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);