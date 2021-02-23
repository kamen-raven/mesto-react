import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

export default function EditAvatarPopup(props) {
  //реф объект
  const avatarInputRef = React.useRef();


  function handleSubmit(evt) {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarInputRef.current.value
    });
  }







  return (
    <PopupWithForm name="avatar-edit"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>
      <fieldset className="popup__fieldset">
        <input className="popup__input popup__input_avatar-edit_link"
          id="input-avatar-url"
          type="url"
          name="avatar"
          placeholder="Ссылка на картинку аватара"
          defaultValue=""
          autoComplete="off"
          required
          ref={avatarInputRef} />
        <span className="popup__input-error"
          id="input-avatar-url-error">
        </span>
      </fieldset>
    </PopupWithForm>
  )
}


