import Process from '../../components/Process/Process.jsx';
import Services from '../../components/Services/Services.jsx'
import Portfolio from '../../components/Portfolio/Portfolio.jsx';
import Brief from '../../components/Brief/Brief.jsx';
import Contact from '../../components/Contact/Contact.jsx';
import SEO from '../../components/SEO/SEO.jsx';

function Home() {   
    return (
        <>
            <SEO
                title="Разработка сайтов"
                description="REDCODE — создание сайтов, веб-разработка, дизайн, поддержка и сопровождение веб-проектов."
                url="https://redcode.ru/"
            />
            <main>
                <Services />
                <Process />
                <Portfolio />
                <Contact />
                <Brief />
            </main>
        </>
    );
}

export default Home;