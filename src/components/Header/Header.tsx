import React, { useState } from "react";
import cl from "./Header.module.scss";
import Logo from "../UI/Logo/Logo";
import Navigation from "../UI/Navigation/Navigation";
import Modal from "../UI/modal/ModalNav";

const Header = () => {
    const [modalActive, setModalActive] = useState<boolean>(false);
    return (
        <header className={cl.header}>
            <div className={cl.header__wrapper}>
                <div className={cl.header__logo}>
                    <Logo />
                </div>
                <nav className={cl.header__nav}>
                    <Navigation />
                </nav>
                <div
                    className={cl.header__menu}
                    onClick={(e) => setModalActive(true)}
                >
                    <img
                        className={cl.header__iconMenu}
                        src={require("../../images/svg/menu.svg").default}
                        alt="menu"
                    />
                </div>
            </div>
            {modalActive && <Modal onClose={(e) => setModalActive(false)} />}
        </header>
    );
};

export default Header;
