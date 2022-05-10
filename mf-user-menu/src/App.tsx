import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserMenuComponent from "./components/user-menu-component";
import UserMenu from "./UserMenu";

const App = () => {
    return (
        <BrowserRouter>
            <UserMenuComponent />
            <p>Welcome to UserMenu</p>
            <Routes>
                <Route path="/" element={<p>Home UserMenu</p>} />
                <Route path="/purchase-history" element={<p>Purchase History page UserMenu</p>} />
                <Route path="/home" element={<p>UserMenu</p>} />
            </Routes>
        </BrowserRouter>);

}


export default App;