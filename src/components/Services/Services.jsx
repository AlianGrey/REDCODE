import './Services.scss';
import web from '../../assets/images/services/web.png';
import learning from '../../assets/images/services/learning.png';
import support from '../../assets/images/services/support.png';
import { Link } from 'react-router-dom';

const services = [
  { 
    image: web,
    title: 'Веб разработка',
    description: 'Корпоративные сайты, интернет-магазины,  landing page',
    link: '/services#web-development',
  },
  { 
    image: learning,
    title: 'Системы дистанционного обучения',
    description: 'Лекции, тесты. Система оценок, статистика.',
    link: '/services#learning',
  },
  { 
    image: support,
    title: 'Поддержка и сопровождение',
    description: 'Поддержка сайтов и серверного оборудования.',
    link: '/services#support',
  }
];

function Services() {
  return (
    <section id="services" className="services">    

        <h2 className="services__title">ЧЕМ МЫ ЗАНИМАЕМСЯ</h2>   
        <div className="services__list">
            {services.map((service, index) => (
                <Link to={service.link} className="services__item" key={index}>
                    <img className="services__image" src={service.image} alt={service.title} />
                    <h3 className="services__name">{service.title}</h3>
                    <p className="services__description">{service.description}</p>
                </Link>
                ))
            }
        </div>

    </section>  
    );
}

export default Services;