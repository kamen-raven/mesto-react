import React from 'react';
import api from "../utils/api.js";

export default function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  React.useEffect(() => {
      api.getUserData()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((error) => {
        console.log(`Хьюстон, у нас проблема при загрузке первоначальной информации: ${error}`)
      });
  }, [])

/*
  Promise.all([
    api.getUserData(),
    api.getInitialCards()
  ])
    .then(([userValue, initialCards]) => {
      myUserId = userValue._id;
      userInfo.setUserInfo(userValue.name, userValue.about);
      userInfo.setAvatar(userValue.avatar);
      cardList.renderItems(initialCards);
    })
    .catch((error) => {
      console.log(`Хьюстон, у нас проблема при загрузке первоначальной информации: ${error}`)
    });
   */



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
      </section>
    </main>
  )
}
