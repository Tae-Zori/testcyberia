import React from "react";
import cl from "./ModalNav.module.scss";
import Navigation from "../Navigation/Navigation";
interface IModalProps {
    onClose: (e: any) => any;
}
const Modal = ({ onClose }: IModalProps) => {
    return (
        <article className={cl.modal}>
            <div className={cl.modal__wrapper}>
                <div className={cl.modal__btnBox}>
                    <button onClick={onClose}>
                        <img
                            src={
                                require("../../../images/svg/close.svg").default
                            }
                            alt="close"
                        />
                    </button>
                </div>

                <nav className={cl.modal__nav}>
                    <Navigation />
                </nav>

                <address className={cl.modal__adress}>
                    <h2>Контакты:</h2>
                    <ul>
                        <li>
                            <a href="tel:+79991234567">+7 999 123 45 67</a>
                        </li>
                        <li>hello@cyberia.studio</li>
                        <li>ул.Ярных, д.35, оф.10</li>
                    </ul>
                </address>
            </div>
        </article>
    );
};

export default Modal;
