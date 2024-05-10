import React from "react";
import cl from "./Card.module.scss";
import { IProject } from "../../../interfaces/Interfaces";

interface IPropsCard {
    project: IProject;
}

export const Card = ({ project }: IPropsCard) => {
    return (
        <div className={cl.card}>
            <img
                className={cl.card__img}
                src={project.image}
                alt="image project"
            />
            <div className={cl.card__box}>
                <img
                    className={cl.card__decoration}
                    src={require("../../../images/svg/imgCard.svg").default}
                    alt=""
                />
                <div className={cl.card__title}>
                    <span>{project.title}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
