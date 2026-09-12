import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightLong,
    faUser,
    faPhone,
    faEnvelope,
    // faTelegram,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import webformTitle from "../../assets/images/contacts_webform-title.png";

import './Contact.scss'

const contactSchema = z.object({
    name: z
        .string(),
    contact: z
        .string()
        .trim()
        .min(3,"Укажите контакт для связи"),
    message: z
        .string()
        .trim()
        .min(3,"Это поле обязательно для заполнения"),
    consent: z
        .boolean()
        .refine(value => value === true, {
            message: "Необходимо согласиться с обработкой персональных данных",
        }),
});

function Contact() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm( { 
        resolver: zodResolver(contactSchema), 
    } );

    const onSubmit = (data) => {
        console.log(data);
    }

    return ( 
        <section className="contacts">
            <div className="container">
                <div className="contacts__left">
                    <h2 className="contacts__title">
                        <img src={webformTitle} alt="СВЯЗАТЬСЯ С НАМИ" />
                    </h2>

                    <form className="contacts__form" onSubmit={handleSubmit(onSubmit)}>     
                        
                        <div className="contacts__form-field">
                            <FontAwesomeIcon icon={faUser} className="contacts__form-field__icon" />
                            <input
                                id="name"
                                type="text"
                                placeholder="Ваше имя"
                                {...register("name")}
                            />
                        </div>

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
                            <p className="error">{errors.contact.message}</p>
                        )}

                        <textarea
                            id="message"
                            placeholder="Чем мы можем помочь?"
                            {...register("message")}
                        />
                        {errors.message && (
                            <p className="error">{errors.message.message}</p>
                        )}

                        <div className="contacts__form-consent">
                            <input
                                id="consent"
                                type="checkbox"
                                {...register("consent", {required: "Необходимо согласить с обработкой персональных данных",})}
                            />

                            <label htmlFor="consent">
                                Отправляя данные, Вы соглашаетесь на{" "}
                                <u><a href="/privacy-policy">обработку персональных данных</a></u>
                            </label>
                        </div>

                        {errors.consent && (
                            <p className="error">{errors.consent.massage}</p>
                        )}

                        <button type="submit" className="contacts__submit">
                            <FontAwesomeIcon icon={faArrowRightLong} />
                            <span>Отправить</span>                    
                        </button>
                    </form>
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
