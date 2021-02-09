import React from 'react';
import logo from '../images/logo.svg';

export default function Main(props) {


  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-button"
                onClick={props.onEditAvatar}>
          <img className="profile__avatar"
            src={logo}
            alt="аватарка" />
        </button>
        <div className="profile__info">
          <h1 className="profile__title">
          </h1>
          <button className="profile__edit-button"
            type="button"
            aria-label="редактировать профиль"
            onClick={props.onEditProfile}>
          </button>
          <p className="profile__subtitle">
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
