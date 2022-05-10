import React, { FC } from "react";

interface Props {
    results: Array<{ title: string, description: string, imgUrl: string }>
}

const RemoteSearchResults = React.lazy(() => import("SearchResults"));

const SearchResults: FC<Props> = ({ results }) => {
    return(
        <React.Suspense fallback="Loading SearchResults...">
            <RemoteSearchResults results={results} />
        </React.Suspense>
    )
}

export default SearchResults;