import React from 'react';
import api from "../utils/api.js";
import Card from "./Card.js";

export default function Main(props) {

  //стейты данных пользоввателя
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  //отрисовка данных пользователя
  React.useEffect(() => {
    api.getUserData()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((error) => {
        console.log(`Хьюстон, у нас проблема при загрузке информации о пользователе: ${error}`)
      });
  }, []);

  //стейт карточек
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards()
    .then((res) => {
      setCards(res);
    })
    .catch((error) => {
      console.log(`Хьюстон, у нас проблема при загрузке карточек: ${error}`)
    })
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-button"
                onClick={props.onEditAvatar}>
          <img className="profile__avatar"
                src={userAvatar}
                alt="аватарка" />
        </button>
        <div className="profile__info">
          <h1 className="profile__title">
            {userName}
          </h1>
          <button className="profile__edit-button"
                  type="button"
                  aria-label="редактировать профиль"
                  onClick={props.onEditProfile}>
          </button>
          <p className="profile__subtitle">
            {userDescription}
          </p>
        </div>
        <button className="profile__add-button"
                type="button"
                aria-label="добавить фото"
                onClick={props.onAddCard}>
        </button>
      </section>
      <section className="cards">
        {cards.map(card =>
          <Card card={card}
                key={card._id}
                onCardClick={props.onCardClick} />
        )}
      </section>
    </main>
  )
}
