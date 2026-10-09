import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { briefSchema } from "../../schemas/briefSchema";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import ModalMessage from "../ModalMessage/ModalMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import './BriefForm.scss';

function BriefForm() {
    const [submitStatus, setSubmitStatus] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { 
            errors,
            isSubmitting,},
    } = useForm( { 
        resolver: zodResolver(briefSchema), 
        mode: "onBlur",
        defaultValues: {
            name: "",
            company: "",
            email: "",
            phone: "",
            projectType: "",
            projectDescription: "",
            audience: "",
            design: "",
            examples: "",
            deadline: "",
            budget: "",
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
                import.meta.env.VITE_EMAILJS_BRIEF_TEMPLATE_ID,
                data,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            );
            setSubmitStatus("success");
            reset();

        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus("error");
        }
    }

    return (
        <>
        <form className="brief-form" onSubmit={handleSubmit(onSubmit)}>

            {/* 01 — Контакты */}
            <div className="brief-form__block">
                <div className="brief-form__heading">
                    <span>01</span>
                    <div>
                        <p>КОНТАКТЫ</p>
                        <h2>КТО ВЫ?</h2>
                    </div>
                </div>

                <div className="brief-form__fields">

                    <label className="brief-form__field">
                        <span>Ваше имя *</span>

                        <input
                            type="text"
                            id="name"
                            {...register('name')}
                            placeholder="Введите ваше имя"
                        />

                        {errors.name && (
                            <span className="brief-form__error">
                                {errors.name.message}
                            </span>
                        )}
                    </label>


                    <label className="brief-form__field">
                        <span>Название компании</span>

                        <input
                            type="text"
                            id="company"
                            {...register('company')}
                            placeholder="Название компании"
                        />

                        {errors.company && (
                            <span className="brief-form__error">
                                {errors.company.message}
                            </span>
                        )}
                    </label>


                    <label className="brief-form__field">
                        <span>Email *</span>

                        <input
                            type="email"
                            id="email"
                            {...register('email')}
                            placeholder="example@mail.com"
                        />

                        {errors.email && (
                            <span className="brief-form__error">
                                {errors.email.message}
                            </span>
                        )}
                    </label>


                    <label className="brief-form__field">
                        <span>Телефон</span>

                        <input
                            type="tel"
                            id="phone"
                            {...register('phone')}
                            placeholder="+381 ..."
                        />

                        {errors.phone && (
                            <span className="brief-form__error">
                                {errors.phone.message}
                            </span>
                        )}
                    </label>

                </div>
            </div>


            {/* 02 — Тип проекта */}
            <div className="brief-form__block">

                <div className="brief-form__heading">
                    <span>02</span>
                    <div>
                        <p>ПРОЕКТ</p>
                        <h2>ЧТО НУЖНО СДЕЛАТЬ?</h2>
                    </div>
                </div>


                <div className="brief-form__options">

                    <label>
                        <input
                            type="radio"
                            id="projectTypeWebsite"
                            value="Сайт с нуля"
                            {...register('projectType')}
                        />
                        <span>Сайт с нуля</span>
                    </label>


                    <label>
                        <input
                            type="radio"
                            id="projectTypeRedesign"
                            value="Редизайн существующего сайта"
                            {...register('projectType')}
                        />
                        <span>Редизайн существующего сайта</span>
                    </label>


                    <label>
                        <input
                            type="radio"
                            id="projectTypeE-commerce"
                            value="Интернет-магазин"
                            {...register('projectType')}
                        />
                        <span>Интернет-магазин</span>
                    </label>


                    <label>
                        <input
                            type="radio"
                            id="projectTypeE-learning"
                            value="Система дистанционного обучения"
                            {...register('projectType')}
                        />
                        <span>Система дистанционного обучения</span>
                    </label>


                    <label>
                        <input
                            type="radio"
                            id="projectTypeSupport"
                            value="Поддержка и развитие сайта"
                            {...register('projectType')}
                        />
                        <span>Поддержка и развитие сайта</span>
                    </label>


                    <label>
                        <input
                            type="radio"
                            id="projectTypeOther"
                            value="Другое"
                            {...register('projectType')}
                        />
                        <span>Другое</span>
                    </label>

                </div>

                {errors.projectType && (
                    <span className="brief-form__error">
                        {errors.projectType.message}
                    </span>
                )}

            </div>


            {/* 03 — О проекте */}
            <div className="brief-form__block">

                <div className="brief-form__heading">
                    <span>03</span>
                    <div>
                        <p>ЗАДАЧА</p>
                        <h2>РАССКАЖИТЕ О ПРОЕКТЕ</h2>
                    </div>
                </div>


                <label className="brief-form__field brief-form__field--full">
                    <span>Что нужно сделать? *</span>

                    <textarea
                        id="projectDescription"
                        {...register('projectDescription')}
                        placeholder="Расскажите о компании, проекте и задачах, которые должен решать сайт..."
                        rows="7"
                    />

                    {errors.projectDescription && (
                        <span className="brief-form__error">
                            {errors.projectDescription.message}
                        </span>
                    )}
                </label>

            </div>


            {/* 04 — Целевая аудитория */}
            <div className="brief-form__block">

                <div className="brief-form__heading">
                    <span>04</span>
                    <div>
                        <p>АУДИТОРИЯ</p>
                        <h2>ДЛЯ КОГО СОЗДАЁМ?</h2>
                    </div>
                </div>


                <label className="brief-form__field brief-form__field--full">
                    <span>Целевая аудитория</span>

                    <textarea
                      id="audience"
                        {...register('audience')}
                        placeholder="Кто ваши клиенты? Для кого предназначен сайт?"
                        rows="5"
                    />

                    {errors.audience && (
                        <span className="brief-form__error">
                            {errors.audience.message}
                        </span>
                    )}
                </label>

            </div>


            {/* 05 — Дизайн */}
            <div className="brief-form__block">

                <div className="brief-form__heading">
                    <span>05</span>
                    <div>
                        <p>ДИЗАЙН</p>
                        <h2>КАКИМ ДОЛЖЕН БЫТЬ САЙТ?</h2>
                    </div>
                </div>


                <label className="brief-form__field brief-form__field--full">
                    <span>Пожелания по дизайну</span>

                    <textarea
                        id="design"
                        {...register('design')}
                        placeholder="Расскажите о предпочитаемом стиле, цветах, настроении..."
                        rows="5"
                    />

                    {errors.design && (
                        <span className="brief-form__error">
                            {errors.design.message}
                        </span>
                    )}
                </label>


                <label className="brief-form__field brief-form__field--full">
                    <span>Примеры сайтов</span>

                    <textarea
                        {...register('examples')}
                        id="examples"
                        placeholder="Добавьте ссылки на сайты, которые вам нравятся"
                        rows="4"
                    />

                    {errors.examples && (
                        <span className="brief-form__error">
                            {errors.examples.message}
                        </span>
                    )}
                </label>

            </div>


            {/* 06 — Сроки и бюджет */}
            <div className="brief-form__block">

                <div className="brief-form__heading">
                    <span>06</span>
                    <div>
                        <p>ДЕТАЛИ</p>
                        <h2>СРОКИ И БЮДЖЕТ</h2>
                    </div>
                </div>


                <div className="brief-form__fields">

                    <label className="brief-form__field">
                        <span>Желаемые сроки</span>

                        <input
                            type="text"
                            id="deadline"
                            {...register('deadline')}
                            placeholder="Например, до декабря 2026"
                        />

                        {errors.deadline && (
                            <span className="brief-form__error">
                                {errors.deadline.message}
                            </span>
                        )}
                    </label>


                    <label className="brief-form__field">
                        <span>Ориентировочный бюджет</span>

                        <input
                            type="text"
                            id="budget"
                            {...register('budget')}
                            placeholder="Например, 1500–3000 €"
                        />

                        {errors.budget && (
                            <span className="brief-form__error">
                                {errors.budget.message}
                            </span>
                        )}
                    </label>

                    <div className="brief-form__honeypot" aria-hidden="true">
                        <input
                            type="text"
                            {...register("website")}
                            tabIndex={-1}
                            autoComplete="off"
                        />
                    </div>

                </div>
            </div>

            <div className="brief-form__consent">
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
                            <p className="brief-form__error">{errors.consent.message}</p>
            )}

            {/* Отправка */}
            <div className="brief-form__submit">
                <p>Заполняя бриф, вы помогаете нам лучше
                    понять ваш проект и подготовить предложение.
                </p>
                <button 
                    type="submit" 
                    className="btn btn-red"
                    disabled={isSubmitting}
                >
                    <span>{isSubmitting ? "Отправка..." : "ОТПРАВИТЬ БРИФ"}</span>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </button>
            </div>

        </form>

        <ModalMessage
            status={submitStatus}
            onClose={() => setSubmitStatus(null)}
        />
        </>
    )
}

export default BriefForm