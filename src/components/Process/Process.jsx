import './Process.scss'
import lamp from '../../assets/icons/process-title-lamp.svg'

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
    ,
    {
        number: 3,
        title: 'ПРОДУМЫВАЕМ', 
        description: 'Заранее продумываем потребности пользователей и удобство использования сайта.',
    },
    ,
    {
        number: 4,
        title: 'РАЗРАБАТЫВАЕМ', 
        description: 'Превращаем готовый дизайн в современный адаптивный сайт.',
    },
    ,
    {
        number: 5,
        title: 'ЗАПУСКАЕМ И ОБУЧАЕМ', 
        description: 'Передаём готовый сайт и обучаем, как самостоятельно работать с его содержимым.',
    },
    ,
    {
        number: 6,
        title: 'ОСТАЁМСЯ НА СВЯЗИ', 
        description: 'Обеспечиваем поддержку и сопровождение сайта, чтобы он всегда оставался актуальным и безопасным.',
    },
]

function Process() {
  return ( 
    <section className="process">  
        <div className='container'>
            <div className="process__intro">
                <h2 className='process__title section-title'>Как идея  <img src={lamp} alt="Идея" />   становится сайтом</h2>
                <p className="section-subtitle">разберём по шагам</p>
            </div>
            <div className="process__steps">   
                {processSteps.map((step) => (
                    <article key={step.number} className="process__step">
                        <span className="process__number">
                            {step.number}
                        </span>
                        <h3 className="items-title">{step.title}</h3>   
                        <p>{step.description}</p>
                    </article>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Process