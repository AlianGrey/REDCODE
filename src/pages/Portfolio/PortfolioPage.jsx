import './PortfolioPage.scss'
import projects from '../../data/projects'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO/SEO'
import block1 from '../../assets/images/pages/portfolio/portfolio_block1_bg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faComments } from '@fortawesome/free-solid-svg-icons'

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
                    <div className="container">
                        <div className="portfolio-page__left">
                            <p className="portfolio-page__subtitle page-subtitle">ПОРТФОЛИО</p>
                            <h1 className="portfolio-page__title page-title">НАШИ ПРОЕКТЫ</h1>
                            <p className="section-subtitle">у каждого проекта свой характер</p>
                            
                            <p className="portfolio-page__description page-description">
                                Создаём сайты, которые помогают представить компанию, <br />
                                продукт или идею и решают задачу бизнеса.
                            </p>
                        </div>
                        <div className="portfolio-page__right">
                            <img src={block1} alt="Изображение с портфолио"></img>
                        </div>
                    </div>
                </section>

                <div className='container'>
                    <div className="portfolio-page__grid">
                        {projects.map((project, index) => (
                            <Link
                                to={`/projects/${project.slug}`}
                                className={`portfolio-page__card ${
                                    index === 0 ? 'portfolio-page__card--featured' : 'portfolio-page__card--overlay'
                                }`}
                                key={project.id}
                            >
                                <div className="portfolio-page__image">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                    />
                                </div>

                                <div className="portfolio-page__content">   

                                    <p className="portfolio-page__type">
                                        {project.type}
                                    </p>      

                                    <div className="portfolio-page__bottom">                 
                                        <h2>{project.title}</h2>

                                        <span className="portfolio-page__arrow">
                                            →
                                        </span>
                                    </div>  

                                        <p className='portfolio-page__description'>
                                            {project.description}
                                        </p>
                                        
                                        <span className='portfolio-page__more text-link'>
                                            Подробнее
                                            <FontAwesomeIcon icon={faArrowRight} className="text-link__icon"/>
                                        </span>
                                </div>
                            </Link>  
                        ))}
                    </div>

                </div>
            </main>

            <section className='portfolio-cta'>
                <div className='container'>
                    <div className='portfolio-cta__image'>
                        <FontAwesomeIcon icon={faComments} />
                    </div>
                    <div className='portfolio-cta__content'>
                        <h2 className='portfolio-cta__title'>Есть идея для нового проекта? </h2>
                        <p className='portfolio-cta__description'>Давайте создадим сайт вместе.</p>
                        <Link to="/brief" className="portfolio-cta__button btn btn-red">
                            <span>Заполнить бриф</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PortfolioPage
