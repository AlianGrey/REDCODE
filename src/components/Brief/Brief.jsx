import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

import './Brief.scss'

function Brief() { 
  return (
    <section className="brief">
      <div className="container">
        <h2 className="brief__title">Хотите чтобы мы ответили вам более дельно, предварительно рассмотрев вашу идею</h2>
        <div className="brief__arrow">
            <FontAwesomeIcon icon={faArrowDown} />
        </div>
        <Link to="/brief" className="brief__button">
            <FontAwesomeIcon icon={faListUl} />
            <span>ЗАПОЛНИТЕ БРИФ</span>
        </Link>
        <p className="brief__caption">несколько лёгких вопросов</p>
      </div>
    </section>
  )
}

export default Brief
