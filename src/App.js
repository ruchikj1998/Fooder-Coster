import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from "./components/Body";



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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Main />);