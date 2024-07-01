import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IFeedbackData {
    phone: string;
    email: string;
    message: string;
    name: string;
}

interface IValidateForm {
    formData: IFeedbackData;
    setName: (name: string) => void;
    setEmail: (email: string) => void;
    setPhone: (phone: string) => void;
    setMessage: (message: string) => void;
}

interface ISendFeedbackProps {
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>;
    formData: IFeedbackData;
    setName: (name: string) => void;
    setEmail: (email: string) => void;
    setPhone: (phone: string) => void;
    setMessage: (message: string) => void;
    agree?: boolean;
}

const styleToast: any = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
};

export function sendFeedback({
    event,
    formData: { name, email, phone, message },
    setName,
    setEmail,
    setPhone,
    setMessage,
    agree,
}: ISendFeedbackProps) {
    event.preventDefault();

    const validate = validateFormData({
        formData: { name, email, phone, message },
        setName,
        setEmail,
        setPhone,
        setMessage,
    });
    if (!validate) {
        toast.warn("Пожалуйста, введите корректные данные", styleToast);
        return;
    }
    if (agree === false) {
        toast.warn(
            "Необходимо согласие на обработку персональных данных",
            styleToast
        );
        return;
    } else {
        feedbackActions({ phone, email, message, name });
    }
}

async function feedbackActions({ phone, email, message, name }: IFeedbackData) {
    const host = `https://api.test.cyberia.studio/api/v1`;
    const url = `${host}/feedbacks?phone=${phone}&email=${email}&message=${message}`;
    const feedbackData = {
        phone: phone.trim(),
        email: email.trim(),
        message: message.trim(),
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(feedbackData),
        });

        if (response.status === 200) {
            toast.success("Ваш запрос успешно отправлен", styleToast);
        } else if (response.status === 422) {
            const errors = await response.json();
            toast.error("Ошибка валидации (422)", styleToast);
            console.log("Validation errors:", errors);
        } else {
            toast.error("Ошибка валидации", styleToast);
            throw new Error("Something went wrong");
        }
    } catch (error: any) {
        toast.error(`${error.message}`, styleToast);
        console.error("Error:", error);
    }
}

function validateFormData({
    formData: { name, email, phone, message },
    setName,
    setEmail,
    setPhone,
    setMessage,
}: IValidateForm): boolean {
    const phonePattern = /^(?:\+7|8)\d{10}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const namePattern = /^[а-яА-ЯёЁ\s]+$/;
    let isValid = true;

    if (!phonePattern.test(phone)) {
        setPhone("");
        isValid = false;
    }
    if (email.trim() === "" || !emailPattern.test(email)) {
        setEmail("");
        isValid = false;
    }
    if (name.trim() === "" || !namePattern.test(name)) {
        setName("");
        isValid = false;
    }
    if (message.trim() === "") {
        setMessage("");
        isValid = false;
    }

    return isValid;
}
