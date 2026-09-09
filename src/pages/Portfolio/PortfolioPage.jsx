import './PortfolioPage.scss'
import projects from '../../data/projects'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO/SEO'

const PortfolioPage = () => {   
    return (
        <>
            <SEO
                title="Портфолио"
                description="Проекты REDCODE — сайты и веб-проекты, разработанные нашей командой."
                url="https://redcode.ru/portfolio"
            />
            <main className="portfolio-page">
                <section className="portfolio-page__intro">
                    <h1>Портфолио</h1>
                    <p>у каждого проекта свой характер</p>
                </section>
                <div className="portfolio-page__grid">
                    {projects.map((project) => (
                        <Link
                            to={`/projects/${project.slug}`}
                            className="portfolio-page__item"
                            key={project.id}
                        >
                            <img src={project.image} alt={project.title} />

                            <div className="portfolio-page__overlay">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                            </div>
                        </Link>  
                    ))}
                </div>
            </main>
        </>
    )
}

export default PortfolioPage
