import React, { FC } from "react";

import classes from "./user-menu-field.module.scss";

interface Props {
    label: string,
    value: string,
}

const fieldsMap = {
    name: "Имя",
    secondName: "Фамилия",
    age: "Возраст",
    university: "Место учебы"
};

const UserMenuField: FC<Props> = ({label, value}) => {

    return (
        <div className={classes.userMenuField}>
            <span className={classes.userMenuField__label}>{fieldsMap[label]}:  </span>
            <span>{value}</span>
        </div>)
};

export default UserMenuField;
