import React, { FC } from "react";
import { Avatar } from "@mui/material";
import userData from "./user.json";
import UserMenuField from "./user-menu-field";
import { deepOrange } from '@mui/material/colors';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';


import classes from "./user-menu.module.scss";

const UserMenu: FC = () => {
    const { sex, ...restUserData } = userData;
    return (
        <div className={classes.userMenu}>
            <header className={classes.userMenu__header}>
                <div className={classes.userMenu__label}>Пользовательское меню</div>
                <Avatar className={classes.userMenu__avatar} sx={{ bgcolor: deepOrange[500] }} alt="user avatar">АП</Avatar>
            </header>

            <div className={classes.userMenu__infoWrapper}>
                {Object.entries(restUserData).map(([key, value]) => <UserMenuField label={key} value={value} />)}
                <FormControl>
                    <FormLabel>Пол:</FormLabel>
                    <RadioGroup
                        defaultValue={sex}
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="male" control={<Radio />} label="Мужской" />
                        <FormControlLabel value="female" control={<Radio />} label="Женский" />
                    </RadioGroup>
                </FormControl>
                <div className={classes.userMenu__btnGroup}>
                    <Button variant="outlined">Сменить пароль</Button>
                    <Button variant="outlined">Выйти</Button>
                </div>
            </div>
        </div>)
}

export default UserMenu;
