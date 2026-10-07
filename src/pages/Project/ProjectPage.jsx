import projects from '../../data/projects'
import { useParams, Link } from 'react-router-dom'
import SEO from '../../components/SEO/SEO'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowUpRightFromSquare, faComments } from '@fortawesome/free-solid-svg-icons'
import ProjectGallery from './ProjectGallery'
import './ProjectPage.scss'
import Cta from '../../components/CTA/Cta'

function ProjectPage() {
    const { slug } = useParams();
    const project = projects.find(
        (project) => project.slug === slug);

    if (!project) {
        return (
            <main className="project-page">
                <div className="container project-page__not-found">
                    <h1>Проект не найден</h1>
                    <Link to="/portfolio">Вернуться в портфолио</Link>
                </div>
            </main>
        )
    }

    const {
        title,
        image,
        bigheader_image,
        type,
        category,
        date,
        description,
        full_description,
        features,
        technologies,
        tasks,
        gallery,
        link,
    } = project

    return (
        <>
            <SEO
                title={title}
                description={description}
                image={image}
                url={`https://redcode.ru/projects/${slug}`}
            />
            <main className="project-page">

                {/* HERO */}
                <section className="project-hero">
                    <div className="container">
                        <Link to="/portfolio" className="project-hero__back">
                            <FontAwesomeIcon icon={faArrowLeft} className="text-link__icon"/>
                            <span>Портфолио</span>
                        </Link>

                        <div className="project-hero__content">
                            <div className="project-hero__info">
                                <span className="project-hero__type">{type}</span>

                                <h1 className="project-hero__title">{title}</h1>

                                <p className="project-hero__description">{description}</p>

                                <div className="project-hero__tags">
                                    {category && (
                                    <span>{category}</span>
                                    )}

                                    {technologies?.map((technology) => (
                                        <span key={technology}>{technology}</span>
                                    ))}
                                </div>

                                {link && !link.includes('example.com') && (
                                    <a href={link} className="project-hero__link" target="_blank" rel="noopener noreferrer">
                                    Смотреть сайт
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-link__icon"/>
                                    </a>
                                )}
                            </div>

                            <div className="project-hero__visual">
                                <div className="project-hero__image">
                                    <img src={bigheader_image} alt={`Главный экран проекта: ${title}`}/>
                                </div>
                                <span className="project-hero__decoration" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* PROJECT DETAILS */}

                <section className="project-details">
                    <div className="container">
                        <div className="project-details__grid">
                            <div className="project-details__main">
                                <span className="project-section-label">О проекте</span>

                                <h2 className="project-section-title section-title">Задача и решение</h2>

                                <p className="project-details__description">{full_description}</p>

                                {date && (
                                    <p className="project-details__date">
                                    <span>Год реализации</span>
                                    <strong>{date}</strong>
                                    </p>
                                )}
                            </div>

                            {tasks?.length > 0 && (
                            <aside className="project-tasks">
                                <h3>Что было сделано</h3>

                                <ul>
                                {tasks.map((task) => (
                                    <li key={task}>
                                    <span className="project-tasks__check">
                                        ✓
                                    </span>
                                    {task}
                                    </li>
                                ))}
                                </ul>
                            </aside>
                            )}
                        </div>

                        {features?.length > 0 && (
                            <div className="project-features">
                                {features.map((feature, index) => (
                                    <div key={index} className="project-features__item">
                                        <div className="project-features__icon">
                                            <FontAwesomeIcon icon={feature.icon} />
                                        </div>
                                        <h4 className="project-features__title">{feature.title}</h4>
                                        <p className="project-features__description">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {technologies?.length > 0 && (
                            <div className="project-technologies">
                                <h3>Технологии</h3>

                                <div className="project-technologies__list">
                                    {technologies.map((technology) => (
                                    <span key={technology}>
                                        {technology}
                                    </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* GALLERY */}

                {gallery?.length > 0 && (
                    <section className="project-gallery-section">
                        <div className="container">
                            <h2 className="project-section-title section-title">Галерея проекта</h2>
                            <ProjectGallery images={gallery.map(item => typeof item === 'string' ? item : item.src)} />
                        </div>
                    </section>
                )}

                {/* CTA */}
                <Cta 
                    main_icon={faComments}
                    subtitle="Есть идея?" 
                    title="Давайте создадим ваш проект." 
                    description="Расскажите о своей задаче — обсудим, как её решить." 
                    buttonText="Обсудить проект" 
                    buttonLink="/brief" 
                    btn_icon={faArrowUpRightFromSquare}
                />
                
            </main>
        </>
    );
}

export default ProjectPage;