import BriefForm from '../../components/BriefForm/BriefForm.jsx';
import './BriefPage.scss';

function BriefPage() {
    return (
        <main className="brief-page">

            <section className="brief-page__intro">
                <div className="container">
                    <p className="brief-page__label">БРИФ</p>
                    <h1 className="brief-page__title">РАССКАЖИТЕ<br />О СВОЁМ ПРОЕКТЕ</h1>
                    <p className="brief-page__description">
                        Заполните небольшой бриф, чтобы мы лучше поняли
                        вашу задачу. Чем подробнее будут ваши ответы,
                        тем точнее мы сможем предложить решение.
                    </p>
                </div>
            </section>

            <section className="brief-page__form">
                <div className="container">
                    <BriefForm />
                </div>
            </section>

        </main>
    );
}

export default BriefPage;