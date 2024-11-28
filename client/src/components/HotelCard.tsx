import { useState } from "react";
import { UseTheme } from "../services/ThemeContext";

interface BookingData {
  hotels: {
    image_url: string;
    name: string;
    description: string;
    price_per_night: string;
  }[];
}

function HotelCard({ bookingData }: { bookingData: BookingData }) {
  const hotels = bookingData.hotels;
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentHotel = hotels[currentIndex];

  const handleCLickPopup = () => {
    setPopupVisible(!popupVisible);
  };

  const handleNextHotel = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % hotels.length);
  };

  const handlePreviousHotel = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? hotels.length - 1 : prevIndex - 1,
    );
  };

  const themeContext = UseTheme();
  const theme = themeContext ? themeContext.theme : "default-theme";
  return (
    <>
      <article className={`card ${theme}`}>
        <img
          src={currentHotel.image_url}
          alt={currentHotel.name}
          className="booking-card-img"
        />

        <div className="description">
          <h2>{currentHotel.name}</h2>
          <p className="card-description">{currentHotel.description}</p>
          <p className="card-price">
            <u>
              <strong>Prix moyen</strong>
            </u>{" "}
            : {currentHotel.price_per_night}€
          </p>
        </div>

        <div className="navigation-buttons">
          <button
            className="button-previous"
            type="button"
            onClick={handlePreviousHotel}
          >
            Précédent
          </button>
          <button
            className="button-next"
            type="button"
            onClick={handleNextHotel}
          >
            Suivant
          </button>
        </div>
        <button
          className="button-reservation"
          type="button"
          onClick={handleCLickPopup}
        >
          Reservez
        </button>
      </article>

      {popupVisible && (
        <div className="popup-overlay">
          <div className={`popup-container ${theme}`}>
            <h2 className="popup-title">Reservez votre séjour !</h2>

            <img className="img-popup-hotel" src="../hotel-popup.png" alt="" />

            <input
              type="number"
              className="popup-input"
              placeholder="Pour combien de personnes ?"
            />

            <input type="date" className="popup-input" />
            <p className="popup-text">au</p>
            <input type="date" className="popup-input" />

            <p className="price">Prix :</p>
            <button
              className="button-reservation"
              type="button"
              onClick={handleCLickPopup}
            >
              Valider
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default HotelCard;
