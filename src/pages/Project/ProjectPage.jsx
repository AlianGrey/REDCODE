import projects from '../../data/projects'
import { useParams } from 'react-router-dom'
import SEO from '../../components/SEO/SEO';

function ProjectPage() {
    const { slug } = useParams();
    const project = projects.find(
        (project) => project.slug === slug);

    if (!project) {
        return <div>Такого проекта не существует.</div>;
    }

    return (
        <>
            <SEO
                title={project.title}
                description={project.description}
                image={project.image}
                url={`https://redcode.ru/projects/${project.slug}`}
            />
            <main className="project-page">
                <h1>{project.title}</h1>
                <img src={project.image} alt={project.title} />
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Посмотреть проект
                </a>
            </main>
        </>
    );
}

export default ProjectPage;