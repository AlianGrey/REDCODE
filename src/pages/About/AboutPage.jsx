import Brief from "../../components/Brief/Brief";
import Process from "../../components/Process/Process";
import Services from "../../components/Services/Services";
import SEO from "../../components/SEO/SEO";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faUsers, faCode, faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import introIcon from '../../assets/images/pages/aboutUs/aboutUs_block1_v4.svg';
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
                    <div className="container">
                        <div className="about-intro__icon">
                            <img src={introIcon} alt="intro image"></img>
                        </div>
                        <div className="about-intro__content">
                            <h1 className="about-intro__title section-title">НЕСКОЛЬКО СЛОВ О НАШЕЙ КОМПАНИИ</h1>
                            <p className="about-intro__subtitle">
                                Как мы превращаем вашу идею в современный,
                                удобный и функциональный сайт.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Кто мы */}
                <section className="about-us">
                    <div className="container">
                        <div className="about-us__content">
                            <p className="about-us__subtitle page-subtitle">КТО МЫ</p>

                            <h2 className="about-us__title block-title">
                                Создаём решения,
                                которые работают
                            </h2>

                            <p className="about-us__text page-description">
                                Мы занимаемся разработкой и поддержкой
                                сайтов для бизнеса и образовательных
                                проектов.
                            </p>

                            <p className="about-us__text page-description">
                                Помогаем пройти весь путь от идеи и
                                дизайна до готового проекта и его
                                дальнейшего развития.
                            </p>

                            <p className="about-us__text page-description">
                                Для нас важно не просто создать красивый
                                сайт, а сделать его понятным для
                                пользователей и удобным для заказчика.
                            </p>
                        </div>
                    </div>
                </section>

                <Services />

                {/* Наш подход */}
                <section className="about-approach">
                    <div className="container">
                        <div className="about-approach__intro">
                            <p className="about-approach__subtitle page-subtitle">НАШ ПОДХОД</p>
                            <h2 className="about-approach__title block-title">Работаем над проектом вместе</h2>
                            <p className="about-approach__text page-description">
                                Мы стараемся сделать процесс разработки
                                понятным и комфортным на каждом этапе.
                            </p>
                        </div>

                        <div className="about-approach__grid">

                            <article className="about-approach__item">
                                <span className="about-approach__number">01</span>
                                <FontAwesomeIcon icon={faPuzzlePiece} className="about-approach__icon"/>
                                <div className="about-approach__content">
                                    <h3>Индивидуальный подход</h3>
                                    <p>Разбираемся в задаче и подбираем
                                        решение, которое подходит именно
                                        вашему проекту.
                                    </p>
                                </div>
                            </article>

                            <article className="about-approach__item">
                                <span className="about-approach__number">02</span>
                                <FontAwesomeIcon icon={faUsers} className="about-approach__icon"/>
                                <div className="about-approach__content">
                                    <h3>Думаем о пользователе</h3>
                                    <p>Создаём интерфейсы, которыми удобно
                                        пользоваться и которые помогают
                                        достигать целей проекта.
                                    </p>
                                </div>
                            </article>

                            <article className="about-approach__item">
                                <span className="about-approach__number">03</span>
                                <FontAwesomeIcon icon={faCode} className="about-approach__icon"/>
                                <div className="about-approach__content">
                                    <h3>Современные технологии</h3>
                                    <p>Используем актуальные технологии
                                        разработки для создания быстрых
                                        и адаптивных сайтов.
                                    </p>
                                </div>
                            </article>

                            <article className="about-approach__item">
                                <span className="about-approach__number">04</span>
                                <FontAwesomeIcon icon={faHeadset} className="about-approach__icon"/>
                                <div className="about-approach__content">
                                    <h3>Поддержка после запуска</h3>
                                    <p>Остаёмся на связи после запуска
                                        и помогаем развивать проект дальше.
                                    </p>
                                </div>
                            </article>

                        </div>
                    </div>
                </section>

                <Process />
                <Brief />
            </main>
        </>
    );
}

export default AboutPage;