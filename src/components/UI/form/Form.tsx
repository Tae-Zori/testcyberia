import BtnForm from "../button/BtnForm";
import InputForm from "../input/InputForm";
import cl from "./Form.module.scss";

export const Form = () => {
    return (
        <form className={cl.form}>
            <div className={cl.form__container}>
                <div className={cl.form__otherInputs}>
                    <InputForm label={"Ваше имя*"} />
                    <InputForm label={"Email*"} />
                    <InputForm label={"Телефон*"} />
                </div>
                <InputForm label={"Сообщение*"} />
            </div>

            <div className={cl.form__agree}>
                <div className={cl.form__box}>
                    <input
                        type="checkbox"
                        id="cbx"
                        className={cl.form__checkbox}
                    />
                    <label htmlFor="cbx" className={cl.form__checkmark}></label>
                </div>
                <label>Согласие на обработку персональных данных</label>
            </div>
            <div className={cl.form__btnBox}>
                <BtnForm>Обсудить проект</BtnForm>
            </div>
        </form>
    );
};

export default Form;
