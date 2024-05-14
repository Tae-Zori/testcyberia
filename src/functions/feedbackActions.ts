import { IFeedbackData } from "../interfaces/Interfaces";

interface ISendFeedbackProps {
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>;
    formData: IFeedbackData;
    setName: (name: string) => void;
    setEmail: (email: string) => void;
    setPhone: (phone: string) => void;
    setMessage: (message: string) => void;
    agree?: boolean;
}

export function sendFeedbackDesktop({
    event,
    formData: { name, email, phone, message },
    setName,
    setEmail,
    setPhone,
    setMessage,
    agree,
}: ISendFeedbackProps) {
    event.preventDefault();
    if (
        phone.trim() === "" ||
        email.trim() === "" ||
        message.trim() === "" ||
        (name && name.trim() === "")
    ) {
        if (phone.trim() === "") {
            setPhone("");
        }
        if (email.trim() === "") {
            setEmail("");
        }
        if (name && name.trim() === "") {
            setName("");
        }
        if (message.trim() === "") {
            setMessage("");
        }
        alert("Пожалуйста, введите данные");
        return;
    }
    if (!agree) {
        alert("Необходимо согласие на обработку персональных данных");
        return;
    } else {
        feedbackActions({ phone, email, message });
    }
}

export function sendFeedbackMobile({
    event,
    formData: { name, email, phone, message },
    setName,
    setEmail,
    setPhone,
    setMessage,
}: ISendFeedbackProps) {
    event.preventDefault();
    if (
        phone.trim() === "" ||
        email.trim() === "" ||
        message.trim() === "" ||
        (name && name.trim() === "")
    ) {
        if (phone.trim() === "") {
            setPhone("");
        }
        if (email.trim() === "") {
            setEmail("");
        }
        if (name && name.trim() === "") {
            setName("");
        }
        if (message.trim() === "") {
            setMessage("");
        }
        alert("Пожалуйста, введите данные");
    } else {
        feedbackActions({ phone, email, message });
    }
}

async function feedbackActions({ phone, email, message }: IFeedbackData) {
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
            alert("Ваш запрос успешно отправлен");
        } else if (response.status === 422) {
            const errors = await response.json();
            console.log("Validation errors:", errors);
        } else {
            throw new Error("Something went wrong");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}
