import Brief from "../../components/Brief/Brief";
import Process from "../../components/Process/Process";
import Services from "../../components/Services/Services";
import aboutUs from "../../assets/images/about_us.jpg";
import SEO from "../../components/SEO/SEO";

import './AboutPage.scss';


function AboutPage() {
    return (
        <>
            <SEO
                title="О нас"
                description="REDCODE — команда, которая создаёт сайты с характером и помогает развивать их после запуска."
                url="https://redcode.ru/about"
            />
            <main className='about-page'>
                {/* Intro */}
                <section className="about-intro">
                    <p className="about-intro__subtitle">О НАС</p>
                    <h1 className="about-intro__title">
                        Превращаем идею в современный,
                        удобный и функциональный сайт.
                    </h1>
                </section>

                {/* Кто мы */}
                <section className="about-us">
                    <div className="about-us__content">
                        <p className="about-us__subtitle">КТО МЫ</p>

                        <h2 className="about-us__title">
                            Создаём решения,
                            которые работают
                        </h2>

                        <p className="about-us__text">
                            Мы занимаемся разработкой и поддержкой
                            сайтов для бизнеса и образовательных
                            проектов.
                        </p>

                        <p className="about-us__text">
                            Помогаем пройти весь путь от идеи и
                            дизайна до готового проекта и его
                            дальнейшего развития.
                        </p>

                        <p className="about-us__text">
                            Для нас важно не просто создать красивый
                            сайт, а сделать его понятным для
                            пользователей и удобным для заказчика.
                        </p>
                    </div>

                    <div className="about-us__image">
                        <img  src={aboutUs} alt="Рабочий процесс REDCODE" />
                    </div>
                </section>

                <Services />

                {/* Наш подход */}
                <section className="about-approach">
                    <div className="about-approach__intro">
                        <p className="about-approach__subtitle">НАШ ПОДХОД</p>
                        <h2 className="about-approach__title">Работаем над проектом вместе</h2>
                        <p className="about-approach__text">
                            Мы стараемся сделать процесс разработки
                            понятным и комфортным на каждом этапе.
                        </p>
                    </div>

                    <div className="about-approach__grid">

                        <article className="about-approach__item">
                            <span className="about-approach__number">01</span>
                            <h3>Индивидуальный подход</h3>
                            <p>Разбираемся в задаче и подбираем
                                решение, которое подходит именно
                                вашему проекту.
                            </p>
                        </article>

                        <article className="about-approach__item">
                            <span className="about-approach__number">02</span>
                            <h3>Думаем о пользователе</h3>
                            <p>Создаём интерфейсы, которыми удобно
                                пользоваться и которые помогают
                                достигать целей проекта.
                            </p>
                        </article>

                        <article className="about-approach__item">
                            <span className="about-approach__number">03</span>
                            <h3>Современные технологии</h3>
                            <p>Используем актуальные технологии
                                разработки для создания быстрых
                                и адаптивных сайтов.
                            </p>
                        </article>

                        <article className="about-approach__item">
                            <span className="about-approach__number">04</span>
                            <h3>Поддержка после запуска</h3>
                            <p>Остаёмся на связи после запуска
                                и помогаем развивать проект дальше.
                            </p>
                        </article>

                    </div>
                </section>

                <Process />
                <Brief />
            </main>
        </>
    );
}

export default AboutPage;