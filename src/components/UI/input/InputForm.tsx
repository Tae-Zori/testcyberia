import React, { useEffect, useState } from "react";
import cl from "./InputForm.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const InputForm = (props: InputProps) => {
    const [form, setForm] = useState<string>("other");
    useEffect(() => {
        if (props.label === "Сообщение*") {
            setForm("message");
        } else {
            setForm("other");
        }
    }, [props.label]);

    return (
        <div className={cl.input} data-form={form}>
            <label className={cl.input__lab}>{props.label}</label>
            <input
                {...props}
                className={cl.input__field}
                placeholder={props.label}
                data-form={form}
            />
        </div>
    );
};

export default InputForm;
