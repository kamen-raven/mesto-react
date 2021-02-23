import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import api from "../utils/api.js";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import PopupWithForm from './Popup/PopupWithForm.js';
import EditProfilePopup from "./Popup/EditProfilePopup.js";
import EditAvatarPopup from "./Popup/EditAvatarPopup.js";
import ImagePopup from './Popup/ImagePopup.js';


export default function App() {
  //стейт-переменная данных пользоваетля
  const [currentUser, setCurretUser] = React.useState({});

  //отрисовка данных пользователя
  React.useEffect(() => {
    api.getUserData()
      .then((res) => {
        setCurretUser(res);
      })
      .catch((error) => {
        console.log(`Хьюстон, у нас проблема при загрузке информации о пользователе: ${error}`)
      });
  }, []);


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

  //изменение данных пользователя
  function handleUpdateUser(data) {
    api.patchUserInfo(data)
      .then((res) => {
        setCurretUser(res);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(`Хьюстон, у нас проблема при обновлении информации пользователя: ${error}`)
      });
  }


  function handleUpdateAvatar(data) {
    api.patchUserAvatar(data)
      .then((res) => {
        setCurretUser(res);
        closeAllPopups();
      })
      .catch((error) => {
        console.log(`Хьюстон, у нас проблема при обновлении аватара пользователя: ${error}`)
      });
  }

  return (
  <CurrentUserContext.Provider value={currentUser}>
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
    <EditProfilePopup
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      onUpdateUser={handleUpdateUser}
    />

    {/* popupCardAdd */}
      <PopupWithForm name="card-add"
                      title="Новое место"
                      buttonText="Сохранить"
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
    <EditAvatarPopup
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
      onUpdateAvatar={handleUpdateAvatar}
    />

    {/* popupConfirmDelete */}
      <PopupWithForm name="confirm-delete"
                        title="Вы уверены?"
                        buttonText="Да"
                        onClose={closeAllPopups}>
      </PopupWithForm>

    {/* popupImageView*/}
      <ImagePopup card={selectedCard}
                      isOpen={isPopupWithImageOpen}
                      onClose={closeAllPopups}>
      </ImagePopup>

    </div>
  </CurrentUserContext.Provider>
  )
}
