import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import SearchResultsPage from "./SearchResults";
import Shell from "./Shell";

const App = () => {
    const [searchResults, setSearchResults] = useState([]);

    // useEffect was added to the root component just to show how microfrontends can communicate with each other
    // It is not really optimized approach, just a PoC
    useEffect(() => {
        window.addEventListener("search-items", (e) => setSearchResults(e.detail));
    }, []);

    return (
        <BrowserRouter>
            <Navbar />
            <Shell>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/search" element={<SearchResultsPage results={searchResults} />}/>
                </Routes>
            </Shell>
        </BrowserRouter>);

}


export default App;