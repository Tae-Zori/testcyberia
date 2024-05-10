import React from "react";
import cl from "./Header.module.scss";
import Logo from "../UI/Logo/Logo";
import Navigation from "../UI/Navigation/Navigation";

const Header = () => {
    return (
        <header className={cl.header}>
            <Logo width={"131px"} height={"27.59px"} />
            <nav className={cl.header__nav}>
                <Navigation />
            </nav>
        </header>
    );
};

export default Header;
