
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
          noValidate>
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
          noValidate>
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
          noValidate>
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
          noValidate>
      <button className="popup__save-button popup__save-button_confirm"
              type="submit">
        Да
      </button>
    </form>
  </div>
</div>
</div>
