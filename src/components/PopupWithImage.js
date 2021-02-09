export default function PopupWithImage() {
  return (
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
  )
}

