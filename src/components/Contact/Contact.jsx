import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightLong,
    faUser,
    faPhone,
    faEnvelope,
    // faTelegram,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import ModalMessage from "../ModalMessage/ModalMessage";

import webformTitle from "../../assets/images/contacts_webform-title.png";
import './Contact.scss'

const contactSchema = z.object({
    name: z
        .string()
        .min(3, "Введите ваше имя. Минимум 3 символа."),
    contact: z
        .string()
        .trim()
        .min(3,"Укажите контакт для связи. Минимум 3 символа."),
    message: z
        .string()
        .trim()
        .min(3,"Это поле обязательно для заполнения. Минимум 3 символа."),
    consent: z
        .boolean()
        .refine(value => value === true, {
            message: "Необходимо согласие на обработку персональных данных",
        }),

    // Скрытое поле для обнаружения ботов
    website: z.string().optional(),
});

function Contact() {
    const [submitStatus, setSubmitStatus] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { 
            errors,
            isSubmitting},
    } = useForm( { 
        resolver: zodResolver(contactSchema), 
        mode: "onBlur",
        defaultValues: {
            name: "",
            contact: "",
            message: "",
            consent: false,
        },
    } );

    const onSubmit = async(data) => {
        if (data.website) {
            return;
        }
        setSubmitStatus(null);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: data.name, 
                    contact: data.contact, 
                    message: data.message
                },
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            );
            setSubmitStatus("success");
            reset();
        } catch (error) {
            console.error("Error sending email:", error);
            setSubmitStatus("error");
        }
    };

    return ( 
        <section className="contacts">
            <div className="container">
                <div className="contacts__left">

                    <h2 className="contacts__title">
                        <img src={webformTitle} alt="СВЯЗАТЬСЯ С НАМИ" />
                    </h2>

                    <form 
                        className="contacts__form" 
                        onSubmit={handleSubmit(onSubmit)}
                    >     
                        
                        <div className="contacts__form-field">
                            <FontAwesomeIcon icon={faUser} className="contacts__form-field__icon" />
                            <input
                                id="name"
                                type="text"
                                placeholder="Ваше имя"
                                {...register("name")}
                            />
                        </div>
                        {errors.name && (
                            <p className="contacts__form__error">{errors.name.message}</p>
                        )}

                        <div className="contacts__form-field">
                            <FontAwesomeIcon icon={faEnvelope} className="contacts__form-field__icon" />
                            <input
                                id="contact"
                                type="text"
                                placeholder="Контакт для связи"
                                {...register("contact")}
                            />
                        </div>
                        {errors.contact && (
                            <p className="contacts__form__error">{errors.contact.message}</p>
                        )}

                        <textarea
                            id="message"
                            placeholder="Чем мы можем помочь?"
                            {...register("message")}
                        />
                        {errors.message && (
                            <p className="contacts__form__error">{errors.message.message}</p>
                        )}

                        <div className="contacts__form-consent">
                            <input
                                id="consent"
                                type="checkbox"
                                {...register("consent")}
                            />

                            <label htmlFor="consent">
                                Отправляя данные, Вы соглашаетесь на{" "}
                                <u><a href="/privacy-policy">обработку персональных данных</a></u>
                            </label>
                        </div>

                        {errors.consent && (
                            <p className="contacts__form__error">{errors.consent.message}</p>
                        )}

                        <div className="contacts__form__honeypot" aria-hidden="true">
                            <input
                                type="text"
                                {...register("website")}
                                tabIndex={-1}
                                autoComplete="off"
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="contacts__submit btn btn-red"
                            disabled={isSubmitting}
                            >
                            <FontAwesomeIcon icon={faArrowRightLong} />
                            <span>{isSubmitting ? "Отправка..." : "Отправить"}</span>
                        </button>

                    </form>
                    <ModalMessage
                        status={submitStatus}
                        onClose={() => setSubmitStatus(null)}
                    />
                </div>



                <div className="contacts__right">
                    <div className="contacts__info-title">
                        <p>Вы также можете</p>
                        <h2>СВЯЗАТЬСЯ С НАМИ</h2>
                    </div>

                    <a href="tel:+381XXXXXXXXX" className="contacts__link">
                        <FontAwesomeIcon icon={faPhone} className="contacts__link-icon"/>
                        <span>+381 XX XXX XXXX</span>
                    </a>

                    <a href="mailto:info@redcode.ru" className="contacts__link">
                        <FontAwesomeIcon icon={faEnvelope} className="contacts__link-icon"/>
                        <span>info@redcode.ru</span>
                    </a>

                    <div className="contacts__socials">
                        {/* <FontAwesomeIcon icon={faTelegram} /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
