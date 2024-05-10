import React from "react";
import { Link, useLocation } from "react-router-dom";
import cl from "./Breadcrumbs.module.scss";
import { IPageNames } from "../../../interfaces/Interfaces";

const pageNames: IPageNames = {
    home: "Главная",
    cases: "Кейсы",
};

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <ol aria-label="breadcrumbs" className={cl.breadcrumbs}>
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;
                const displayName = pageNames[name] || name;
                return (
                    <li
                        key={name}
                        className={`${cl.breadcrumbs__crumb} ${
                            isLast ? cl.active : ""
                        }`}
                    >
                        {isLast ? (
                            displayName
                        ) : (
                            <Link to={routeTo}>{displayName} /</Link>
                        )}
                    </li>
                );
            })}
        </ol>
    );
};
export default Breadcrumbs;
