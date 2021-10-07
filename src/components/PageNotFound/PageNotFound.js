import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.scss';
import SadSmile from '../../images/sad-face.svg';

function PageNotFound() {
  return (
    <div className="not-found">
      <h3 className="not-found__title">
        <span>404</span> - Страница не найдена
      </h3>
      <img className="not-found__image" src={SadSmile} alt="" />
      <p className="not-found__text">
        Ой, здесь ничего нет
      </p>
      <Link to="/">Назад</Link>
    </div>
  )
}

export default PageNotFound;