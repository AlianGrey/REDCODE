import './Process.scss'
import lamp from '../../assets/icons/process-title-lamp.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const processSteps = [
    {
        number: 1,
        title: 'ЗНАКОМИМСЯ',
        description: 'Обсуждаем вашу идею, цели и задачи.',
    },
    {
        number: 2,
        title: 'ДИЗАЙНИМ', 
        description: 'Создаём дизайн сайта с учётом особенностей вашего бизнеса и задач проекта.',
    },
    {
        number: 3,
        title: 'ПРОДУМЫВАЕМ', 
        description: 'Заранее продумываем потребности пользователей и удобство использования сайта.',
    },
    {
        number: 4,
        title: 'РАЗРАБАТЫВАЕМ', 
        description: 'Превращаем готовый дизайн в современный адаптивный сайт.',
    },
    {
        number: 5,
        title: 'ЗАПУСКАЕМ И ОБУЧАЕМ', 
        description: 'Передаём готовый сайт и обучаем, как самостоятельно работать с его содержимым.',
    },
    {
        number: 6,
        title: 'ОСТАЁМСЯ НА СВЯЗИ', 
        description: 'Обеспечиваем поддержку и сопровождение сайта, чтобы он всегда оставался актуальным и безопасным.',
    },
]

function Process() {
    const [openStep, setOpenStep] = useState(1)

    const handleStepClick = (number) => {
        setOpenStep( openStep === number ? null : number)
    }


  return ( 
    <section className="process">  
        <div className='container'>
            <div className="process__intro">
                <h2 className='process__title section-title'>Как идея  <img src={lamp} alt="Идея" />   становится сайтом</h2>
                <p className="section-subtitle">разберём по шагам</p>
            </div>
            <div className="process__steps">   
                {processSteps.map((step) => {
                    const isOpen = openStep === step.number

                    return(
                        <article 
                            key={step.number} 
                            className={`process__step ${isOpen ? 'is-open' : ''}`}
                        >
                            <div className="process__number">
                                {step.number}
                            </div>
                            <div className="process__description">
                                <button 
                                    className='items-title'
                                    onClick={ () => handleStepClick(step.number) }
                                    aria-expanded= {isOpen}
                                >
                                    <span>{step.title}</span>
                                    <span className='items-title__icon'>
                                        <FontAwesomeIcon icon={faCaretDown} />
                                    </span>
                                </button>
                                <div className="items-description">
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Process