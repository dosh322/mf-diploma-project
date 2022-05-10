import React, { FC } from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import Home from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

import classes from "./NavBar.module.scss";

const UserMenu = React.lazy(() => import("UserMenu"));
const Search = React.lazy(() => import("Search"));

const Navbar: FC = () => {

    return (
        <AppBar className={classes.navbar}>
            <Toolbar className={classes.navbar__container}>
                <IconButton edge="start" color="inherit" aria-label="home" component={Link} to="/">
                    <Home />
                </IconButton>
                <Search />
                <UserMenu />   
            </Toolbar> 
        </AppBar>
    )
}

export default Navbar;
