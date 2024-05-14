import React from "react";
import { Link } from "react-router-dom";
import cl from "./Logo.module.scss";

const Logo = () => {
    return (
        <>
            <Link to={"/home"}>
                <img
                    className={cl.logo}
                    src={require("../../../images/svg/logo.svg").default}
                    alt="Logo"
                />
            </Link>
        </>
    );
};

export default Logo;
