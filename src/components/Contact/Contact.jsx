import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
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
                        
                        <input
                            id="name"
                            type="text"
                            placeholder="Ваше имя"
                            {...register("name")}
                        />                
                        <input
                            id="contact"
                            type="text"
                            placeholder="Контакт для связи"
                            {...register("contact")}
                        />
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

                        <button type="submit" className="contacts__submit">
                            <FontAwesomeIcon icon={faArrowRight} />
                            <span>Отправить</span>                    
                        </button>
                        <p className="contacts__privacy">
                            Оставляя данные, Вы соглашаетесь
                            на обработку персональных данных
                        </p>
                    </form>
                </div>



                <div className="contacts__right">
                    <div className="contacts__info-title">
                        <p>Вы также можете</p>
                        <h2>СВЯЗАТЬСЯ С НАМИ</h2>
                    </div>

                    <a href="tel:+381XXXXXXXXX" className="contacts__link">
                        <FontAwesomeIcon icon={faPhone} />
                        <span>+381 XX XXX XXXX</span>
                    </a>

                    <a href="mailto:info@redcode.ru" className="contacts__link">
                        <FontAwesomeIcon icon={faEnvelope} />
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
