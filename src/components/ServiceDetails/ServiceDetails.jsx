import './ServiceDetails.scss'

import web from '../../assets/images/services/web.svg'
import learning from '../../assets/images/services/learning.svg'
import support from '../../assets/images/services/support.svg'

const services = [
    {
        id: "web-development",
        image: web,
        title: 'Веб-разработка',
        description: 'Разрабатываем современные сайты, которые помогают бизнесу привлекать клиентов и развиваться.',
        points: [
        "Разработка сайта с нуля",
        "Адаптивная вёрстка",
        "Интеграция необходимых функций",
        ],
    },
    {
        id: "learning",
        title: 'Разработка систем дистанционного обучения',
        description: 'Создаём и настраиваем удобные системы для организации дистанционного обучения.',
        image: learning,
        points: [
        "Настройка системы обучения",
        "Создание структуры курсов",
        "Поддержка пользователей",
        ],
    },
    {
        id: "support",
        title: 'Поддержка проектов',
        description: 'Помогаем поддерживать сайт в рабочем состоянии, обновлять его и развивать дальше.',
        image: support,
        points: [
        "Обновление контента",
        "Исправление ошибок",
        "Техническая поддержка",
        ],
    }
]   

function ServiceDetails() {
  return (
    <div className="service-details"> 
        {services.map((service) => (
            <article id={service.id} key={service.id} className="service-details__item">
                <div className="service-details__image">
                    <img src={service.image} alt={service.title} />
                </div>
                <div className="service-details__content">
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                    <ul>
                        {service.points.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>               
            </article>
        ))} 
    </div>
  )
}

export default ServiceDetails