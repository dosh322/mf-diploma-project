import React, { FC, useState } from "react";
import { Rating, InputLabel, Select, SelectChangeEvent, MenuItem, FormControl, IconButton } from "@mui/material";
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import classes from "./SearchResultsItem.module.scss";

interface Props {
    title: string,
    type: string,
    description: string,
    author: string,
    imgUrl: string,
    rating: number,
}

const SearchResultsItem: FC<Props> = ({ title, description, imgUrl, author, type, rating }) => {
    const [downloadFormat, setDownloadFormat] = useState("");


    return (
    <div className={classes.resultItem}>
        <div className={classes.resultItem__container}>
            <div className={classes.resultItem__imgContainer}>
                <img className={classes.resultItem__img} src={imgUrl} /> 
            </div>
            <div className={classes.resultItem__infoContainer}>
                <div>
                    <div className={classes.resultItem__header}>
                        <h3 className={classes.resultItem__title}>{title}</h3>
                        <IconButton edge="start" color="inherit">
                            <BookmarkBorderOutlinedIcon />
                        </IconButton>
                    </div>
                    <div className={classes.resultItem__type}>{type}</div>
                    <div>{description}</div>
                    <div><b>Автор:</b> {author}</div>
                </div>

                <div className={classes.resultItem__footer}>
                    <div className={classes.resultItem__ratingContainer}>
                        <b>Рейтинг</b>
                        <Rating className={classes.resultItem__rating}  precision={0.5} value={rating} />
                    </div>
                    <div className={classes.resultItem__btnsGroup}>
                        <FormControl fullWidth>
                            <InputLabel id="download-label">Скачать</InputLabel>
                            <Select
                                labelId="download-label"
                                id="download-select"
                                value={downloadFormat}
                                label="Age"
                                onChange={(e: SelectChangeEvent) => setDownloadFormat(e.target.value as string)}
                            >
                                <MenuItem value={"PDF"}>PDF</MenuItem>
                                <MenuItem value={"DOCX"}>DOCX</MenuItem>
                                <MenuItem value={"TXT"}>TXT</MenuItem>
                            </Select>
                        </FormControl>   
                        <a className={classes.resultItem__link} href="/">Экспортировать</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SearchResultsItem;
