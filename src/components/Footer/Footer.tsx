import React from "react";
import cl from "./Footer.module.scss";
import Navigation from "../UI/Navigation/Navigation";
import Logo from "../UI/Logo/Logo";
const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.footer__wrapper}>
                <section className={cl.footer__logo}>
                    <Logo width={"196"} height={"41.28px"} />
                    <p>Веб-разработка и усиление IT-команд</p>
                </section>
                <section className={cl.footer__info}>
                    <address className={cl.footer__address}>
                        <p>
                            <a href="tel:+79991234567">+7 999 123 45 67</a>
                        </p>
                        <p>hello@cyberia.studio</p>
                        <p>ул.Ярных, д.35, оф.10</p>
                    </address>
                    <div className={cl.footer__nav}>
                        <Navigation />
                    </div>
                </section>
            </div>
        </footer>
    );
};

export default Footer;
