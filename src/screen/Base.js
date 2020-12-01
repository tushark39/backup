import React from "react";
import Header from "../helper/Header";
import Footer from "../helper/Footer";
const Base = ({children}) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default Base;
