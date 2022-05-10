import React, { FC } from "react";

import classes from "./TopicBlock.module.scss";

interface Props {
    name: string,
    imgUrl: string,
}

const TopicBlock: FC<Props> = ({ name, imgUrl }) => {
    return (
        <div className={classes.topicBlock}>
            <img className={classes.topicBlock__img} src={imgUrl}/>
            <div className={classes.topicBlock__name}>{name}</div>
        </div>)
}

export default TopicBlock;
