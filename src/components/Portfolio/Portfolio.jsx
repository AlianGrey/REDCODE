import './Portfolio.scss'
import projects from '../../data/projects'
import { Link } from 'react-router-dom'

const Portfolio = () => {   
    return (
        <section className="portfolio" id="portfolio">
            <div className='container'>
                <div className="portfolio__intro">
                    <h2 className="portfolio__title section-title">Портфолио</h2>
                    <p className='section-subtitle'>у каждого проекта свой характер</p>
                </div>
                <Link to="/portfolio" className="portfolio__view-all">
                    Все проекты
                </Link>
            </div>
          
            <div className="portfolio__grid">
                {projects.slice(0, 9).map((project) => (
                    <Link
                        to={`/projects/${project.slug}`}
                        className="portfolio-page__item"
                        key={project.id}
                    >
                        <img src={project.image} alt={project.title} className="portfolio__project-image" />
                        <div className="portfolio__overlay">
                            <h3 className="portfolio__project-title">{project.title}</h3>
                            <p className="portfolio__project-description">{project.description}</p>
                        </div>
                    </Link>  
                ))}
            </div>
        </section>
    )
}

export default Portfolio
