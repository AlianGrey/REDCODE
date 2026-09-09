import { Link } from 'react-router-dom'
import './NotFoundPage.scss'
import img404 from '../../assets/images/404.png'

function NotFoundPage() {
    return (
        <main className='not-found'>
            <div className='not-foung__content'>
                <div className="not-found__left">
                    <img src={img404} alt="Page not found image"></img>
                </div>
                <div className="not-found__right">
                    <span className="not-found__code">404</span>
                    <h1>СТРАНИЦА НЕ НАЙДЕНА</h1>
                    <p>Похоже, такой страницы не существует
                    или она была перемещена.</p>

                    <Link to='/' className="not-found__button">
                    ВЕРНУТЬСЯ НА ГЛАВНУЮ
                    </Link>
                </div>
            </div> 
        </main>
    )
}

export default NotFoundPage