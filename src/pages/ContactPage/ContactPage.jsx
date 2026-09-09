import Contact from '../../components/Contact/Contact';
import Brief from '../../components/Brief/Brief';
import './ContactPage.scss';
import SEO from '../../components/SEO/SEO';

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
                        <p className="contact-page__subtitle">ЕСТЬ ИДЕЯ?</p>

                        <h1 className="contact-page__title">ДАВАЙТЕ СОЗДАДИМ<br />ЕЁ ВМЕСТЕ</h1>

                        <p className="contact-page__description">
                            Расскажите нам о своём проекте — обсудим задачу,
                            предложим решение и ответим на ваши вопросы.
                        </p>
                    </div>
                </section>


                <section className="contact-page__contacts">
                    <div className="container">

                        <div className="contact-page__contacts-header">
                            <p className="section-label">КОНТАКТЫ</p>
                            <h2>БУДЕМ РАДЫ<br />ПОГОВОРИТЬ</h2>
                        </div>

                        <div className="contact-page__contacts-list">

                            <a href="tel:+79999999999" className="contact-page__contact">
                                <span className="contact-page__contact-label">ТЕЛЕФОН</span>
                                <span className="contact-page__contact-value">+7 (999) 999-99-99</span>
                            </a>

                            <a href="mailto:hello@redcode.ru" className="contact-page__contact">
                                <span className="contact-page__contact-label">EMAIL</span>
                                <span className="contact-page__contact-value">hello@redcode.ru</span>
                            </a>

                            <a href="#" className="contact-page__contact">
                                <span className="contact-page__contact-label">TELEGRAM</span>
                                <span className="contact-page__contact-value">@redcode</span>
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