import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { briefSchema } from "../../schemas/briefSchema";
import './BriefForm.scss';

function BriefForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm( { 
        resolver: zodResolver(briefSchema), 
    } );

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
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
                            value="Сайт с нуля"
                            {...register('projectType')}
                        />
                        <span>Сайт с нуля</span>
                    </label>


                    <label>
                        <input
                            type="radio"
                            value="Редизайн существующего сайта"
                            {...register('projectType')}
                        />
                        <span>Редизайн существующего сайта</span>
                    </label>


                    <label>
                        <input
                            type="radio"
                            value="Интернет-магазин"
                            {...register('projectType')}
                        />
                        <span>Интернет-магазин</span>
                    </label>


                    <label>
                        <input
                            type="radio"
                            value="Система дистанционного обучения"
                            {...register('projectType')}
                        />
                        <span>Система дистанционного обучения</span>
                    </label>


                    <label>
                        <input
                            type="radio"
                            value="Поддержка и развитие сайта"
                            {...register('projectType')}
                        />
                        <span>Поддержка и развитие сайта</span>
                    </label>


                    <label>
                        <input
                            type="radio"
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
                            {...register('budget')}
                            placeholder="Например, 1500–3000 €"
                        />

                        {errors.budget && (
                            <span className="brief-form__error">
                                {errors.budget.message}
                            </span>
                        )}
                    </label>
                </div>
            </div>


            {/* Отправка */}
            <div className="brief-form__submit">
                <p>Заполняя бриф, вы помогаете нам лучше
                    понять ваш проект и подготовить предложение.
                </p>
                <button type="submit">ОТПРАВИТЬ БРИФ</button>
            </div>

        </form>
    )
}

export default BriefForm