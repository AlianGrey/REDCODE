import { Link } from 'react-router-dom';
import {
  faCode,
  faGlobe,
  faMobileScreen,
  faLaptopCode,
  faPenRuler,
  faVial,
  faGraduationCap,
  faListCheck,
  faChartLine,
  faGear,
  faFilePen,
  faWandMagicSparkles,
  faArrowRight,
  faComments,
  faCloudArrowUp,
  faCircleCheck,
  faCartShopping,
  faFileCode,
  faRectangleList,
  faTableList,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SEO from '../../components/SEO/SEO.jsx'
import Brief from '../../components/Brief/Brief.jsx';
import block1 from '../../assets/images/pages/services/service_block1.png'
import block2 from '../../assets/images/pages/services/service_block2.png'
import learningBlock from '../../assets/images/pages/services/service_learningBlock.png'
import project1 from '../../assets/images/projects/project-01.jpg'
import project2 from '../../assets/images/projects/project-02.jpg'
import project3 from '../../assets/images/projects/project-03.jpg'
import project4 from '../../assets/images/projects/project-04.jpg'

import './ServicesPage.scss';

const webServices = [
  {
    icon: faGlobe,
    title: 'Корпоративные сайты',
  },
  {
    icon: faFileCode,
    title: 'Landing Page',
  },
  {
    icon: faTableList, //faRectangleList,
    title: 'Сайты-каталоги',
  },
  {
    icon: faCartShopping,
    title: 'Интернет магазины',
  },
  {
    icon: faPenRuler,
    title: 'Индивидуальные проекты',
  },
  {
    icon: faMobileScreen,
    title: 'Адаптивная версия',
  },

];

const educationServices = [
  'Установка и настройка системы',
  'Структура и оформление курсов',
  'Учебные материалы и задания',
  'Тесты и проверка знаний',
  'Контроль прогресса учащихся',
  'Настройка ролей и доступа',
];

const supportServices = [
  {
    icon: faGear,
    title: 'Техническая поддержка',
    text: 'Обновление CMS, исправление ошибок и контроль работоспособности сайта.',
  },
  {
    icon: faFilePen,
    title: 'Работа с контентом',
    text: 'Добавление и изменение текстов, изображений и других материалов.',
  },
  {
    icon: faWandMagicSparkles,
    title: 'Развитие сайта',
    text: 'Новые страницы, функции и улучшения интерфейса по мере развития проекта.',
  },
];

const projects = [
  {
    image: project1,
    title: 'Проект 01',
    type: 'Веб-разработка',
    slug: 'project-1',
  },
  {
    image: project2,
    title: 'Проект 02',
    type: 'Корпоративный сайт',
    slug: 'project-2',
  },
  {
    image: project3,
    title: 'Проект 03',
    type: 'Landing Page',
    slug: 'project-3',
  },
];


function ServicesPage() {
  return (
    <>
       <SEO
        title="Услуги"
        description="Разработка сайтов, создание систем дистанционного обучения, поддержка и сопровождение веб-проектов."
        url="https://redcode.ru/services"
      />
      <main className="services-page">

      {/* HERO */}

      <section className="service-section services-hero">
        <div className="container services-hero__inner">

          <div className="services-hero__content">
            <span className="services-hero__label block-subtitle">УСЛУГИ</span>

            <h1 className="services-hero__title block-title">
              Создаём сайты,<br />которые решают<br />задачи бизнеса
            </h1>

            <p className="services-hero__text">
              От разработки сайта с нуля до его поддержки и развития.
              Подбираем решение под задачи проекта и помогаем на каждом этапе.
            </p>

            <Link to="/brief" className="services-button btn btn-red">
              Обсудить проект
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          <div className="services-hero__image">
            <img src={block1} alt="Разработка сайта" />
          </div>

        </div>
      </section>


      {/* WEB DEVELOPMENT */}

      <section className="service-section service-section--web">
        <div className="container">

          <div className="service-section__header">
            <span className="section-number">01</span>

            <div>
              <h2 className="section-title">
                Веб-разработка
              </h2>

              <p className="service-section__subtitle">
                Сайт под вашу задачу — от идеи до запуска.
              </p>
            </div>
          </div>


          <div className="service-section__content">

            <div className="service-section__text">

              <p className="service-section__description">
                Создаём современные сайты, которые помогают представить
                компанию, продукт или услугу в интернете.
              </p>

              <h3>Что можем сделать</h3>

              <div className="service-list">
                {webServices.map((item) => (
                  <div className="service-list__item" key={item.title}>
                    <span className="service-list__icon">
                      <FontAwesomeIcon icon={item.icon} />
                    </span>

                    <span>{item.title}</span>
                  </div>
                ))}
              </div>

            </div>


            <div className="service-section__visual">
                <img src={block2} alt="WEB разработка"></img>
            </div>

          </div>


          {/* PROCESS */}

          <div className="service-process">

            <h3>Как это работает</h3>

            <div className="service-process__steps">

              <div className="process-step">
                <span>01</span>
                <strong>Обсуждаем</strong>
                <p>Задачи и цели проекта</p>
              </div>

              <div className="process-arrow">→</div>

              <div className="process-step">
                <span>02</span>
                <strong>Проектируем</strong>
                <p>Структуру и интерфейс</p>
              </div>

              <div className="process-arrow">→</div>

              <div className="process-step">
                <span>03</span>
                <strong>Разрабатываем</strong>
                <p>Собираем сайт</p>
              </div>

              <div className="process-arrow">→</div>

              <div className="process-step">
                <span>04</span>
                <strong>Запускаем</strong>
                <p>Тестируем и публикуем</p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* PROJECTS */}

      <section className="services-projects">
        <div className="container">

          <div className="services-projects__heading">
            <h3>
              <span>Примеры</span> проектов, которые мы создаём
            </h3>

            <Link to="/portfolio" className="text-link">
              Все проекты
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>


          <div className="services-projects__grid">

            {projects.map((project) => (
              <Link
                to={`/projects/${project.slug}`}
                className="project-card"
                key={project.slug}
              >
                <div className="project-card__image">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="project-card__info">
                  <h3>{project.title}</h3>
                  <span>{project.type}</span>
                </div>
              </Link>
            ))}

          </div>

        </div>
      </section>


      {/* DISTANCE LEARNING */}

      <section className="service-section service-section--education">

        <div className="container">

          <div className="service-section__content service-section__content--reverse">

            <div className="service-section__visual education-visual">
              <img src={learningBlock} alt="Системы дистанционного обучения"></img>
            </div>

            <div className="service-section__text">

              <div className="service-section__header">
                <span className="section-number">02</span>
                <div>
                  <h2 className="section-title">Системы дистанционного обучения</h2>
                  <p className="service-section__subtitle">Удобное онлайн-пространство для обучения.</p>
                </div>
              </div>

              <p className="service-section__description">
                Настраиваем образовательные платформы и создаём структуру
                онлайн-обучения — от учебных материалов до тестирования
                и контроля прогресса.
              </p>

              <ul className="check-list">

                {educationServices.map((item) => (
                  <li key={item}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    <span>{item}</span>
                  </li>
                ))}

              </ul>

            </div>
          </div>
        </div>
      </section>


      {/* EDUCATION CASE */}

      <section className="education-case">
        <div className="container">

          <div className="education-case__inner">

            <div className="education-case__image">
              <img src={project4} alt="Система дистанционного обучения" />
            </div>

            <div className="education-case__content">

              <div className="page-subtitle">Образовательный портал</div>
              <h3>Медицинских работников</h3>
              <div className='separate-line'></div>
              <p className='service-section__description'>
                Создание учебной среды с курсами, материалами,
                заданиями и тестированием для учащихся.
              </p>

              <div className="case-features">
                <span><FontAwesomeIcon icon={faGraduationCap} />Курсы</span>
                <span><FontAwesomeIcon icon={faListCheck} />Тестирование</span>
                <span><FontAwesomeIcon icon={faChartLine} />Прогресс</span>
              </div>

              <div className='separate-line'></div>
              <Link to="/portfolio" className="text-link">
                Подробнее о проекте
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* SUPPORT */}

      <section className="service-section service-section--support">

        <div className="container">

          <div className="service-section__header">

            <span className="section-number">03</span>
            <div>
              <h2 className="section-title">Поддержка сайтов</h2>
              <p className="service-section__subtitle">
                Сайт запущен — работа продолжается.
              </p>
            </div>

          </div>

          <p className="service-section__description">
            Помогаем поддерживать сайт в актуальном состоянии
            и развивать его по мере роста вашего проекта.
          </p>


          <div className="support-grid">

            {supportServices.map((item) => (

              <article className="support-card" key={item.title}>

                <div className="support-card__icon">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>

              </article>

            ))}

          </div>
        </div>
      </section>


      {/* Bref */}

      <section className="services-cta">

        <div className="container">

          <div className="services-cta__inner">

            <div className="services-cta__icon">
              <FontAwesomeIcon icon={faComments} />
            </div>

            <div>
              <h3>Не знаете с чего начать?</h3>
              <p>Расскажите о своей задаче - вместе подберём подходящее решение.</p>
            </div>

            <Link to="/brief" className="services-button btn btn-white">
              Заполнить бриф
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>

          </div>

        </div>

      </section>


    </main>

    </>
  )
}

export default ServicesPage