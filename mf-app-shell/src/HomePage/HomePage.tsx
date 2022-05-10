import React, { FC } from "react";
import TopicBlock from "../TopicBlock";

import classes from "./HomePage.module.scss";

const topics = [
    { name: "Литература", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Brockhaus_Lexikon.jpg", },
    { name: "Русская классика", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Painted-portraits-of-writer.png/800px-Painted-portraits-of-writer.png", },
    { name: "Научная литература", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Stylised_atom_with_three_Bohr_model_orbits_and_stylised_nucleus.svg/1024px-Stylised_atom_with_three_Bohr_model_orbits_and_stylised_nucleus.svg.png", },
    { name: "Кино", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Charlie_Chaplin.jpg/800px-Charlie_Chaplin.jpg", },
    { name: "Музыка", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Naxi_Musicians_I.jpg/220px-Naxi_Musicians_I.jpg", },
    { name: "География", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Whole_world_-_land_and_oceans_12000.jpg/1920px-Whole_world_-_land_and_oceans_12000.jpg", },
    { name: "Физика", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/CollageFisica.jpg", },
    { name: "Математика", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CMAP_-_Centre_de_Math%C3%A9matiques_Appliqu%C3%A9es_de_l%27Ecole_polytechnique_%2825911635211%29.jpg/1920px-CMAP_-_Centre_de_Math%C3%A9matiques_Appliqu%C3%A9es_de_l%27Ecole_polytechnique_%2825911635211%29.jpg", },
    { name: "IT", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Summit_%28supercomputer%29.jpg/1280px-Summit_%28supercomputer%29.jpg", },
    { name: "Комиксы", imgUrl: "https://upload.wikimedia.org/wikipedia/ru/8/8a/Plastic_man_1.jpg", },
    { name: "Медицина", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Physician_in_hospital_sickroom_printed_1682.jpg", },
    { name: "Спорт", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Blocked_shots_by_Oscar_Torres.JPG", },
    { name: "Еда", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg", },
    { name: "Биология", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b8/DNA-structure-and-bases.png", },
    { name: "Химия", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/3-cloro-1-buteno-3D.gif/640px-3-cloro-1-buteno-3D.gif", },
];

const HomePage: FC = () => {
    return (
        <div className={classes.homePage}>
            <h2>Популярные темы</h2>
            <div className={classes.homePage__topics}>
                {topics.map((topic) => <TopicBlock {...topic} />)}
            </div>
        </div>
    )
};

export default HomePage;
