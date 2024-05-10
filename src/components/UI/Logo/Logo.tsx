import React from "react";
import { Link } from "react-router-dom";

interface IPropsLogo {
    width: string;
    height: string;
}

const Logo = ({ width, height }: IPropsLogo) => {
    return (
        <section>
            <Link to={"/home"}>
                <img
                    width={width}
                    height={height}
                    src={require("../../../images/svg/logo.svg").default}
                    alt="Logo"
                />
            </Link>
        </section>
    );
};

export default Logo;
