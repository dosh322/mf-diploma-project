import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SearchResults from "./Search";

const App = () => {
    return (
        <BrowserRouter>
            <SearchResults />
            <p>Welcome to Search</p>
            <Routes>
                <Route path="/" element={<p>Home Search</p>} />
                <Route path="/purchase-history" element={<p>Purchase History page Search</p>} />
                <Route path="/home" element={<p>Search</p>} />
            </Routes>
        </BrowserRouter>);

}


export default App;