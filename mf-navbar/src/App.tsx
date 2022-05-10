import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <p>Welcome to sandbox!</p>
            <Routes>
                <Route path="/" element={<p>Home page</p>} />
                <Route path="/purchase-history" element={<p>Purchase History page</p>} />
                <Route path="/home" element={<p>Home page</p>} />
            </Routes>
        </BrowserRouter>);

}


export default App;