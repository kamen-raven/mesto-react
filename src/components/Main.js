import React from 'react';
import api from "../utils/api.js";
import Card from "./Card.js";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

export default function Main(props) {
  //подписываемся на контекст данных текущего пользователя
  const currentUser = React.useContext(CurrentUserContext);

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


  //функция лайков карточек
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(item =>
      item._id === currentUser._id);
    const likeRequest = !isLiked ? api.putLike(card._id) : api.deleteLike(card._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    likeRequest
    .then((newCard) => {
        // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      // Обновляем стейт
      setCards(newCards);
    })
    .catch((error) => {
      console.log(`Хьюстон, у нас проблема при загрузке информации о лайках: ${error}`)
    })
  }




  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-button"
                onClick={props.onEditAvatar}>
          <img className="profile__avatar"
                src={currentUser.avatar}
                alt="аватарка" />
        </button>
        <div className="profile__info">
          <h1 className="profile__title">
            {currentUser.name}
          </h1>
          <button className="profile__edit-button"
                  type="button"
                  aria-label="редактировать профиль"
                  onClick={props.onEditProfile}>
          </button>
          <p className="profile__subtitle">
            {currentUser.about}
          </p>
        </div>
        <button className="profile__add-button"
                type="button"
                aria-label="добавить фото"
                onClick={props.onAddPlace}>
        </button>
      </section>
      <section className="cards">
        {cards.map(card =>
          <Card card={card}
                key={card._id}
                onCardClick={props.onCardClick}
                onCardLike={handleCardLike} />
        )}
      </section>
    </main>
  )
}
