import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';


export default function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddCardPopupOpen, setAddCardPopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddCardClick() {
    setAddCardPopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddCardPopupOpen(false);
    setEditAvatarPopupOpen(false);
  }

  return (

  <div className="page">
    <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddCard={handleAddCardClick}
        onEditAvatar={handleEditAvatarClick}
      />
    <Footer />

    {/* popupProfileEdit */}
    <PopupWithForm name="profile-edit"
                    title="Редактировать профиль"
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}>
      <fieldset className="popup__fieldset">
        <input className="popup__input popup__input_profile-edit_name"
                id="input--profile-name"
                type="text"
                name="name"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                defaultValue=""
                autoComplete="off"
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
                defaultValue=""
                autoComplete="off"
                required />
        <span className="popup__input-error"
              id="input-profile-about-error">
        </span>
      </fieldset>
    </PopupWithForm>

    {/* popupCardAdd */}
    <PopupWithForm name="card-add"
                    title="Новое место"
                    isOpen={isAddCardPopupOpen}
                    onClose={closeAllPopups}>
      <fieldset className="popup__fieldset">
        <input className="popup__input popup__input_card-add_name"
                id="input-card-name"
                type="text"
                name="name"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                defaultValue=""
                autoComplete="off"
                required />
        <span className="popup__input-error"
              id="input-card-name-error">
        </span>
        <input className="popup__input popup__input_card-add_link"
                id="input-card-url"
                type="url"
                name="link"
                placeholder="Ссылка на картинку"
                defaultValue=""
                autoComplete="off"
                required />
        <span className="popup__input-error"
              id="input-card-url-error">
        </span>
      </fieldset>
    </PopupWithForm>

    {/* popupAvatarEdit */}
    <PopupWithForm name="avatar-edit"
                    title="Обновить аватар"
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}>
      <fieldset className="popup__fieldset">
        <input className="popup__input popup__input_avatar-edit_link"
                id="input-avatar-url"
                type="url"
                name="avatar"
                placeholder="Ссылка на картинку аватара"
                defaultValue=""
                autoComplete="off"
                required />
        <span className="popup__input-error"
              id="input-avatar-url-error">
        </span>
      </fieldset>
    </PopupWithForm>

    {/* popupConfirmDelete */}
    <PopupWithForm name="confirm-delete"
                      title="Вы уверены?"
                      onClose={closeAllPopups}>
    </PopupWithForm>

    {/* popupImageView*/}
    <PopupWithImage>
    </PopupWithImage>

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
