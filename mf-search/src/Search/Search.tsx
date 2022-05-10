import React, { useState, FC, MouseEvent } from "react";
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import FilterIcon from '@mui/icons-material/FilterAlt';
import searchItems from "./searchItems.json";

const Search: FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleOnSearchClick = (e: MouseEvent<HTMLAnchorElement>) => {
        const searchEvent = new CustomEvent("search-items", {
            detail: searchItems.items,
        });
        dispatchEvent(searchEvent);
    }

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Поиск"
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement> ) => setSearchQuery(e.target.value)}
            />
            <Link to="/search" onClick={handleOnSearchClick}>
                <IconButton sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Link>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="filters">
                <FilterIcon />
            </IconButton>
        </Paper>
    )
}

export default Search;
