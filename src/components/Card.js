import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

export default function Card(props) {
  //подписываемся на контекст данных текущего пользователя
  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `card__remove-button ${isOwn ? 'card__remove-button_visible' : 'card__remove-button_hidden'}`
  );



    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some(item => item._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `card__like-button_active`;


  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="card"
          key={props.card._id}>
      <button className="card__remove-button"
              type="button"
              aria-label="удалить"
              >
      </button>
      <button className="card__image-button"
        type="button">
        <img className="card__image"
          src={props.card.link}
          alt={props.card.name}
          onClick={handleClick} />
      </button>
      <div className="card__body">
        <h2 className="card__title">
          {props.card.name}
        </h2>
        <div className="card__like">
          <button className="card__like-button "
            type="button"
            aria-label="поставить лайк">
          </button>
          <p className="card__like-counter">
            {props.card.likes.length}
          </p>
        </div>
      </div>
    </div>
  )
}

