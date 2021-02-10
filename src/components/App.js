import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';


export default function App() {
  //стейт открытия попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  const [isAddPlacePopupOpen, setIsAddCardPopupOpen] = React.useState(false);
  function handleAddPlaceClick() {
    setIsAddCardPopupOpen(true);
  }

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  // стейт ткрытия изображения карточки
  const [selectedCard, setSelectedCard] = React.useState();
  const [isPopupWithImageOpen, setIsPopupWithImageOpen] = React.useState(false);

  function handleCardClick(card) {
    setIsPopupWithImageOpen(true);
    setSelectedCard(card);
  }

  //закрытие попапов
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsPopupWithImageOpen(false);
  }

  return (

  <div className="page">
    <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
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
                    isOpen={isAddPlacePopupOpen}
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
    <ImagePopup card={selectedCard}
                    isOpen={isPopupWithImageOpen}
                    onClose={closeAllPopups}>
    </ImagePopup>

    </div>
  )
}
