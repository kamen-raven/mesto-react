import React from 'react';
import logo from './images/logo.svg';
import './index.css';

function App() {
  return (

    <div className="page">

        <header className="header">
          <img className="header__logo"
                alt="лого Mesto" 
                src={logo}
                />
        </header>

        <main className="content">

          <section className="profile">
            <button className="profile__avatar-button">
              <img className="profile__avatar"
                    src="#"
                    alt="аватарка"/>
            </button>
            <div className="profile__info">
                <h1 className="profile__title">
                </h1>
                <button className="profile__edit-button"
                        type="button"
                        aria-label="редактировать профиль">
                </button>
                <p className="profile__subtitle">
                </p>
            </div>
            <button className="profile__add-button"
                    type="button"
                    aria-label="добавить фото">
            </button>
          </section>

          <section className="cards">
          </section>
          
        </main>

        <footer className="footer ">
          <p className="footer__copyright">
            &copy; 2020 Mesto Russia
          </p>
        </footer>
        
{/*     <!--popupProfileEdit--> */}
        <div className="popup popup_profile-edit">
          <div className="popup__container popup__container_create_form">
            <button className="popup__close-button"
                    type="button">
            </button>
            <div className="popup__content">
              <h2 className="popup__title">
                Редактировать профиль
              </h2>
              <form className="popup__form popup__form_profile-edit"
                    name="profileInfo"
                    novalidate>
                <fieldset className="popup__fieldset">
                  <input className="popup__input popup__input_profile-edit_name"
                          id="input--profile-name"
                          type="text"
                          name="name"
                          placeholder="Имя"
                          minLength="2"
                          maxLength="40"
                          value=""
                          autoomplete="off"
                          required />
                  <span className="popup__input-error"
                        id="input--profile-name-error">
                  </span>
                  <input className="popup__input popup__input_profile-edit_about"
                          id="input-profile-about"
                          type="text"
                          name="about"
                          placeholder="О себе"
                          minLength="2"
                          maxLength="200"
                          value=""
                          autocomplete="off"
                          required />
                  <span className="popup__input-error"
                        id="input-profile-about-error">
                  </span>
                </fieldset>
                <button className="popup__save-button"
                        type="submit">
                  Сохранить
                </button>
              </form>
            </div>
          </div>
        </div>


{/*     <!--popupAvatarEdit--> */}
        <div className="popup popup_avatar-edit">
          <div className="popup__container popup__container_create_form">
            <button className="popup__close-button"
                    type="button">
            </button>
            <div className="popup__content">
              <h2 className="popup__title">
                Обновить аватар
              </h2>
              <form className="popup__form popup__form_avatar-edit"
                    name="profileAvatarEdit"
                    novalidate>
                <fieldset className="popup__fieldset">
                  <input className="popup__input popup__input_avatar-edit_link"
                          id="input-avatar-url"
                          type="url"
                          name="avatar"
                          placeholder="Ссылка на картинку аватара"
                          value=""
                          autocomplete="off"
                          required />
                  <span className="popup__input-error"
                        id="input-avatar-url-error">
                  </span>
                </fieldset>
                <button className="popup__save-button"
                        type="submit">
                  Сохранить
                </button>
              </form>
            </div>
          </div>
        </div>

{/*     <!--popupCardAdd--> */}
        <div className="popup popup_card-add">
          <div className="popup__container popup__container_create_form">
            <button className="popup__close-button"
                    type="button">
            </button>
            <div className="popup__content">
              <h2 className="popup__title">
                Новое место
              </h2>
              <form className="popup__form popup__form_card-add"
                    name="addNewCardForm"
                    novalidate>
                <fieldset className="popup__fieldset">
                  <input className="popup__input popup__input_card-add_name"
                          id="input-card-name"
                          type="text"
                          name="name"
                          placeholder="Название"
                          minLength="2"
                          maxLength="30"
                          value=""
                          autocomplete="off"
                          required />
                  <span className="popup__input-error"
                        id="input-card-name-error">
                  </span>
                  <input className="popup__input popup__input_card-add_link"
                          id="input-card-url"
                          type="url"
                          name="link"
                          placeholder="Ссылка на картинку"
                          value=""
                          autocomplete="off"
                          required />
                  <span className="popup__input-error"
                        id="input-card-url-error">
                  </span>
                </fieldset>
                <button className="popup__save-button"
                        type="submit">
                  Сохранить
                </button>
              </form>
            </div>
          </div>
        </div>

{/*     <!--popupConfirmDelete--> */}
        <div className="popup popup_confirm-delete">
          <div className="popup__container popup__container_create_form">
            <button className="popup__close-button"
                    type="button">
            </button>
            <div className="popup__content">
              <h2 className="popup__title">
                Вы уверены?
              </h2>
              <form className="popup__form popup__form_confirm-delete"
                    name="confirmDelete"
                    novalidate>
                <button className="popup__save-button popup__save-button_confirm"
                        type="submit">
                  Да
                </button>
              </form>
            </div>
          </div>
        </div>
        
{/*     <!--popupImageView--> */}
        <div className="popup popup_image-view">
          <div className="popup__container popup__container_create_view">
            <button className="popup__close-button"
                    type="button">
            </button>
              <figure className="popup__figure-content">
                <img className="popup__figure-img"
                      src="#"
                      alt="#" />
                <figcaption className="popup__figure-caption">
                </figcaption>
              </figure>
          </div>
        </div>

{/*     <!--tamplate-cards--> */}
        <template className="template-cards">
          <div className="card">
            <button className="card__remove-button"
              type="button"
              aria-label="удалить">
            </button>
            <button className="card__image-button"
                    type="button">
              <img className="card__image"
                    src="#"
                    alt="#" />
            </button>
            <div className="card__body">
              <h2 className="card__title">
              </h2>
              <div className="card__like">
                <button className="card__like-button "
                        type="button"
                        aria-label="поставить лайк">
                </button>
                <p className="card__like-counter">
                </p>
              </div>
            </div>
          </div>
        </template>
      </div>
  
  )
}

export default App;
