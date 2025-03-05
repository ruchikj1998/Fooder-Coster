import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import UserInfoContext from "./utils/UserInfoContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => {
    return import("./components/Grocery")
});

const Footer = () => (
    <div className="footer">
        <a href="#">Login</a>
    </div>
);

const Main = () => {

    const [userInformation, setUserInformation] = useState();

    useEffect(() => {
        //Make an api call for user login and get resposnse
        const data = {
            userInformation: "Ruchik"
        }
        setUserInformation(data.userInformation);
    }, [])
    return (
        <Provider store={appStore}>
            <UserInfoContext.Provider value={{ userName: userInformation, setUserInformation }}>
                <div className="">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </UserInfoContext.Provider>
        </Provider>
    )
}

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
                path: "/reataurants/:resID",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);