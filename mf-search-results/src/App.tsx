import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import searchData from "../../mf-search/src/Search/searchItems.json";

import SearchResults from "./SearchResults";

const App = () => {

    return (
        <BrowserRouter>
        TEST
            <Routes>
                <Route path="/search" element={<SearchResults results={searchData.items} />} />
            </Routes>
        </BrowserRouter>);

}


export default App;