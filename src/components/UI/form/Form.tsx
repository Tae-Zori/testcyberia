import { useState } from "react";
import BtnForm from "../button/BtnForm";
import InputForm from "../input/InputForm";
import cl from "./Form.module.scss";
import { sendFeedback } from "../../../service/feedback";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Form = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [agree, setAgree] = useState<boolean>(false);

    return (
        <form className={cl.form}>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className={cl.form__container}>
                <div className={cl.form__otherInputs}>
                    <InputForm
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label={"Ваше имя*"}
                        type="text"
                    />
                    <InputForm
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label={"Email*"}
                        type="text"
                    />
                    <InputForm
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        label={"Телефон*"}
                        type="number"
                    />
                </div>
                <InputForm
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    label={"Сообщение*"}
                    type="text"
                />
            </div>

            <div className={cl.form__agree}>
                <div className={cl.form__box}>
                    <input
                        onChange={(e) => setAgree(!agree)}
                        type="checkbox"
                        id="cbx"
                        className={cl.form__checkbox}
                    />
                    <label htmlFor="cbx" className={cl.form__checkmark}></label>
                </div>
                <label>Согласие на обработку персональных данных</label>
            </div>
            <div className={cl.form__btnBox}>
                <BtnForm
                    onClick={(event) =>
                        sendFeedback({
                            event,
                            formData: { name, email, phone, message },
                            setName,
                            setEmail,
                            setPhone,
                            setMessage,
                            agree,
                        })
                    }
                >
                    Обсудить проект
                </BtnForm>
            </div>
            <div className={cl.form__btnBoxMobile}>
                <BtnForm
                    onClick={(event) =>
                        sendFeedback({
                            event,
                            formData: { name, email, phone, message },
                            setName,
                            setEmail,
                            setPhone,
                            setMessage,
                        })
                    }
                >
                    Отправить
                </BtnForm>
            </div>

            <p className={cl.form__agreeMessage}>
                Нажимая “Отправить”, Вы даете согласие на обработку персональных
                данных
            </p>
        </form>
    );
};

export default Form;
