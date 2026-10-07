import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faComments } from '@fortawesome/free-solid-svg-icons';
import './Cta.scss';

function Cta({ main_icon, subtitle, title, description, buttonText, buttonLink, btn_icon }) { 

    return (
        <section className={`cta ${subtitle ? 'cta--with-subtitle' : 'cta--without-subtitle'}`}>
            <div className='container'>
                <div className='cta__image'>
                    <FontAwesomeIcon icon={main_icon} />
                </div>
                <div className="cta__content">  
                    {subtitle && <div className="cta__subtitle">{subtitle}</div>}
                    <h2 className="cta__title">{title}</h2>
                    <p className="cta__description">{description}</p>
                </div>
                <a href={buttonLink} className="cta__button btn btn-light-red">
                    <span>{buttonText}</span>
                    <FontAwesomeIcon icon={btn_icon} />
                </a>
            </div>
        </section>
    );
}

export default Cta;