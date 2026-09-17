import Contact from '../../components/Contact/Contact';
import Brief from '../../components/Brief/Brief';
import './ContactPage.scss';
import SEO from '../../components/SEO/SEO';
import contactPage from '../../assets/images/pages/contactPage_bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ContactPage() {
    return (
        <>
            <SEO
                title="Контакты"
                description="Свяжитесь с REDCODE, чтобы обсудить разработку сайта или ваш новый веб-проект."
                url="https://redcode.ru/contact"
            />
            <main className='contact-page'>
                <section className="contact-page__intro">
                    <div className="container">
                        <div className="contact-page__left">
                            <p className="contact-page__subtitle page-subtitle">ЕСТЬ ИДЕЯ?</p>
                            <h1 className="contact-page__title page-title">ДАВАЙТЕ <br />СОЗДАДИМ<br />ЕЁ ВМЕСТЕ</h1>
                            <p className="contact-page__description">
                                Расскажите нам о своём проекте — <br />обсудим задачу,
                                предложим решение <br />и ответим на ваши вопросы.
                            </p>
                        </div>
                        <div className="contact-page__right">
                            <img src={contactPage} alt="Изображение с контактами"></img>
                        </div>
                    </div>
                </section>


                <section className="contact-page__contacts">
                    <div className="container">

                        <div className="contact-page__contacts-header">
                            <p className="section-label page-subtitle">КОНТАКТЫ</p>
                            <h2 className='page-title__small'>БУДЕМ РАДЫ<br />ПОГОВОРИТЬ</h2>
                        </div>

                        <div className="contact-page__contacts-list">
                            
                            <a href="tel:+79999999999" className="contact-page__contact">
                                <FontAwesomeIcon icon={faPhone} className='contact-page__contact-icon'></FontAwesomeIcon>
                                <div className='contact-page__contact-inner'>
                                    <div className="contact-page__contact-label">ТЕЛЕФОН</div>
                                    <div className="contact-page__contact-value">+7 (999) 999-99-99</div>
                                </div>
                            </a>

                            <a href="mailto:hello@redcode.ru" className="contact-page__contact">
                                <FontAwesomeIcon icon={faEnvelope} className='contact-page__contact-icon'></FontAwesomeIcon>
                                <div className='contact-page__contact-inner'>
                                    <div className="contact-page__contact-label">EMAIL</div>
                                    <div className="contact-page__contact-value">hello@redcode.ru</div>
                                </div>
                            </a>

                            <a href="#" className="contact-page__contact">
                                <FontAwesomeIcon icon={faPhone} className='contact-page__contact-icon'></FontAwesomeIcon>
                                <div className='contact-page__contact-inner'>
                                    <div className="contact-page__contact-label">TELEGRAM</div>
                                    <div className="contact-page__contact-value">@redcode</div>
                                </div>
                            </a>

                        </div>

                    </div>
                </section>


                <section className="contact-page__form">
                    <div className="container">
                        <Contact />
                    </div>
                </section>
                
                <section className="contact-page__brief">
                    <Brief />
                </section>
            </main>
        </>
    )    
}

export default ContactPage;