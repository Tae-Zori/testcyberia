import React, { useEffect, useState } from "react";
import cl from "./Card.module.scss";
import { IProject } from "../../../pages/Cases";

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
            <div className={cl.card__overlay}>
                <div className={cl.card__mobileBox}>
                    <img
                        className={cl.card__decorationMob}
                        src={require("../../../images/svg/imgCard.svg").default}
                        alt=""
                    />
                    <div className={cl.card__titleMob}>
                        <span>{project.title}</span>
                    </div>
                    <p>
                        Онлайн гипермаркет. Для компании были разработаны сайт и
                        мобильное приложение и т.д.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
