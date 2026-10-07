import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faCode, faMobileScreen } from '@fortawesome/free-solid-svg-icons'
import project01 from '../assets/images/projects/project-01.jpg'
import project02 from '../assets/images/projects/project-02.jpg'
import project03 from '../assets/images/projects/project-03.jpg'
import project04 from '../assets/images/projects/project-04.jpg'
import project05 from '../assets/images/projects/project-05.jpg'
import project06 from '../assets/images/projects/project-06.jpg'
import project07 from '../assets/images/projects/project-07.jpg'
import project08 from '../assets/images/projects/project-08.jpg'
import project09 from '../assets/images/projects/project-09.jpg'

import project01Desktop from '../assets/images/projects/project1/project-01-desktop.jpg'
import project01Catalog from '../assets/images/projects/project1/project-01-catalog.jpg'
import project01Mobile from '../assets/images/projects/project1/project-01-mobile.jpg'

const projects = [
    {
        id: 1,
        slug: 'project-1',  
        title: 'Магазин для компании по продаже и установке окон, дверей и жалюзи',
        image: project01,
        bigheader_image: project01,
        type: 'Веб-разработка',
        category: 'Корпоративный сайт',
        date: '2026',
        description: 'Разработка сайта для компании, занимающейся продажей и установкой окон. Сайт включает в себя каталог продукции, информацию о компании, контактные данные и форму обратной связи.',
        full_description: 'Разработка сайта для компании, занимающейся продажей и установкой окон. Сайт включает в себя ',
        features: [
            {
                icon: faPalette,
                title: 'Дизайн',
                description: 'Разработка уникального дизайна, соответствующего фирменному стилю компании и привлекающего внимание посетителей.',    
            },
            {
                icon: faCode,
                title: 'Разработка',
                description: 'Создание функционального и удобного сайта с использованием современных технологий, обеспечивающих быструю загрузку и стабильную работу.',    
            },
            {
                icon: faMobileScreen,
                title: 'Адаптивность',
                description: 'Обеспечение корректного отображения сайта на различных устройствах, включая компьютеры, планшеты и смартфоны.',       
            }
        ],
        technologies: ['React', 'SCSS', 'Vite'],
        tasks: [
            'Разработка структуры и дизайна сайта',
            'Создание каталога продукции',
            'Адаптация для мобильных устройств',
            'Реализация формы обратной связи',
        ],
        gallery: [
        {
            src: project01Desktop,
            alt: 'Главная страница сайта на компьютере',
        },
        {
            src: project01Catalog,
            alt: 'Каталог продукции',
        },
        {
            src: project01Mobile,
            alt: 'Мобильная версия сайта',
        },
        {
            src: project01Mobile,
            alt: 'Мобильная версия сайта',
        },
        ],
        link: 'https://example.com/project1',   
    },
        {
        id: 2,
        slug: 'project-2',  
        title: 'Сайт для компании по продаже и установке окон',
        image: project02,
        type: 'Веб-разработка',
        category: 'Корпоративный сайт',
        date: '2026',
        description: 'Разработка сайта для компании, занимающейся продажей и установкой окон. Сайт включает в себя каталог продукции, информацию о компании, контактные данные и форму обратной связи.',
        technologies: ['React', 'SCSS', 'Vite'],
        tasks: [
            'Разработка структуры и дизайна сайта',
            'Создание каталога продукции',
            'Адаптация для мобильных устройств',
            'Реализация формы обратной связи',
        ],
        gallery: [],
        link: 'https://example.com/project2',   
    },
        {
        id: 3,
        slug: 'project-3',  
        title: 'Сайт для компании по продаже и установке окон',
        image: project03,
        type: 'Веб-разработка',
        category: 'Корпоративный сайт',
        date: '2026',
        description: 'Разработка сайта для компании, занимающейся продажей и установкой окон. Сайт включает в себя каталог продукции, информацию о компании, контактные данные и форму обратной связи.',
        technologies: ['React', 'SCSS', 'Vite'],
        tasks: [
            'Разработка структуры и дизайна сайта',
            'Создание каталога продукции',
            'Адаптация для мобильных устройств',
            'Реализация формы обратной связи',
        ],
        gallery: [],
        link: 'https://example.com/project3',   
    },
        {
        id: 4,
        slug: 'project-4',  
        title: 'Сайт для компании по продаже и установке окон',
        image: project04,
        type: 'Веб-разработка',
        category: 'Корпоративный сайт',
        date: '2026',
        description: 'Разработка сайта для компании, занимающейся продажей и установкой окон. Сайт включает в себя каталог продукции, информацию о компании, контактные данные и форму обратной связи.',
        technologies: ['React', 'SCSS', 'Vite'],
        tasks: [
            'Разработка структуры и дизайна сайта',
            'Создание каталога продукции',
            'Адаптация для мобильных устройств',
            'Реализация формы обратной связи',
        ],
        gallery: [],
        link: 'https://example.com/project4',   
    },
        {
        id: 5,
        slug: 'project-5',  
        title: 'Сайт для компании по продаже и установке окон',
        image: project05,
        type: 'Веб-разработка',
        category: 'Корпоративный сайт',
        date: '2026',
        description: 'Разработка сайта для компании, занимающейся продажей и установкой окон. Сайт включает в себя каталог продукции, информацию о компании, контактные данные и форму обратной связи.',
        technologies: ['React', 'SCSS', 'Vite'],
        tasks: [
            'Разработка структуры и дизайна сайта',
            'Создание каталога продукции',
            'Адаптация для мобильных устройств',
            'Реализация формы обратной связи',
        ],
        gallery: [],
        link: 'https://example.com/project5',   
    },
        {
        id: 6,
        slug: 'project-6',  
        title: 'Сайт для компании по продаже и установке окон',
        image: project06,
        type: 'Веб-разработка',
        category: 'Корпоративный сайт',
        date: '2026',
        description: 'Разработка сайта для компании, занимающейся продажей и установкой окон. Сайт включает в себя каталог продукции, информацию о компании, контактные данные и форму обратной связи.',
        technologies: ['React', 'SCSS', 'Vite'],
        tasks: [
            'Разработка структуры и дизайна сайта',
            'Создание каталога продукции',
            'Адаптация для мобильных устройств',
            'Реализация формы обратной связи',
        ],
        gallery: [],
        link: 'https://example.com/project6',   
    },
        {
        id: 7,
        slug: 'project-7',  
        title: 'Сайт для компании по продаже и установке окон',
        image: project07,
        type: 'Веб-разработка',
        category: 'Корпоративный сайт',
        date: '2026',
        description: 'Разработка сайта для компании, занимающейся продажей и установкой окон. Сайт включает в себя каталог продукции, информацию о компании, контактные данные и форму обратной связи.',
        technologies: ['React', 'SCSS', 'Vite'],
        tasks: [
            'Разработка структуры и дизайна сайта',
            'Создание каталога продукции',
            'Адаптация для мобильных устройств',
            'Реализация формы обратной связи',
        ],
        gallery: [],
        link: 'https://example.com/project7',   
    },
        {
        id: 8,
        slug: 'project-8',  
        title: 'Сайт для компании по продаже и установке окон',
        image: project08,
        type: 'Веб-разработка',
        category: 'Корпоративный сайт',
        date: '2026',
        description: 'Разработка сайта для компании, занимающейся продажей и установкой окон. Сайт включает в себя каталог продукции, информацию о компании, контактные данные и форму обратной связи.',
        technologies: ['React', 'SCSS', 'Vite'],
        tasks: [
            'Разработка структуры и дизайна сайта',
            'Создание каталога продукции',
            'Адаптация для мобильных устройств',
            'Реализация формы обратной связи',
        ],
        gallery: [],
        link: 'https://example.com/project8',   
    },
        {
        id: 9,
        slug: 'project-9',  
        title: 'Сайт для компании по продаже и установке окон',
        image: project09,
        type: 'Веб-разработка',
        category: 'Корпоративный сайт',
        date: '2026',
        description: 'Разработка сайта для компании, занимающейся продажей и установкой окон. Сайт включает в себя каталог продукции, информацию о компании, контактные данные и форму обратной связи.',
        technologies: ['React', 'SCSS', 'Vite'],
        tasks: [
            'Разработка структуры и дизайна сайта',
            'Создание каталога продукции',
            'Адаптация для мобильных устройств',
            'Реализация формы обратной связи',
        ],
        gallery: [],
        link: 'https://example.com/project9',   
    },
]

export default projects;