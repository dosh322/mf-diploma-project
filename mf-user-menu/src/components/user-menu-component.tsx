import React, { FC, useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UserMenu from "../UserMenu"

import classes from "./user-menu-component.module.scss";

const UserMenuComponent: FC = () => {
    const [isUserMenuOpened, setIsUserMenuOpened] = useState(false);
    
    return (
        <div className={classes.userMenuWrapper}>
            <IconButton color="inherit" onClick={() => setIsUserMenuOpened(true)}>
                <AccountCircleIcon color="inherit" />
                Меню
            </IconButton>

            <Drawer anchor="left" open={isUserMenuOpened} onClose={() => setIsUserMenuOpened(false)}>
                <UserMenu />
            </Drawer>
        </div>
    )
}

export default UserMenuComponent;
