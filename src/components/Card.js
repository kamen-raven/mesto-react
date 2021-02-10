import React from 'react';

export default function Card(props) {

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

