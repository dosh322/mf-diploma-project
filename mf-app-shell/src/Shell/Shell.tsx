import React, { FC, PropsWithChildren } from "react";

import classes from "./Shell.module.scss";

const Shell: FC<PropsWithChildren<{}>> = ({ children }) => {

    return (
        <main className={classes.shell}>
            {children}
        </main>
    )
}

export default Shell;
