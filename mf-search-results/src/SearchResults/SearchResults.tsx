import React, { FC } from "react";
import SearchResultsItem from "../SearchResultsItem";

interface Props {
    results: Array<{ title: string, description: string, author: string, imgUrl: string, type: string, rating: number }>
}

const SearchResults: FC<Props> = ({ results }) => {
    return (
    <div style={{ marginTop: "50px" }}>
        {results.map((result) => <SearchResultsItem {...result} />)}
    </div>)
}

export default SearchResults;
