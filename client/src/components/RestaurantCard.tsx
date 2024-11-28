import { useState } from "react";
import { UseTheme } from "../services/ThemeContext";

interface BookingData {
  restaurants: {
    image_url: string;
    name: string;
    description: string;
    average_price_per_person: string;
  }[];
}

function RestaurantCard({ bookingData }: { bookingData: BookingData }) {
  const restaurants = bookingData.restaurants;
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentRestaurant = restaurants[currentIndex];

  const handleCLickPopup = () => {
    setPopupVisible(!popupVisible);
  };

  const handleNextRestaurant = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % restaurants.length);
  };

  const handlePreviousRestaurant = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? restaurants.length - 1 : prevIndex - 1,
    );
  };

  const themeContext = UseTheme();
  const theme = themeContext ? themeContext.theme : "default-theme";
  return (
    <>
      <article className={`card ${theme}`}>
        <img
          src={currentRestaurant.image_url}
          alt={currentRestaurant.name}
          className="booking-card-img"
        />

        <div className="description">
          <h2>{currentRestaurant.name}</h2>
          <p className="card-description">{currentRestaurant.description}</p>
          <p>
            <u>
              <strong>Prix moyen</strong>
            </u>{" "}
            : {currentRestaurant.average_price_per_person}€
          </p>
        </div>

        <div className="navigation-buttons">
          <button
            className="button-previous"
            type="button"
            onClick={handlePreviousRestaurant}
          >
            Précédent
          </button>
          <button
            className="button-next"
            type="button"
            onClick={handleNextRestaurant}
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

        {popupVisible && (
          <div className="popup-overlay">
            <div className={`popup-container ${theme}`}>
              <h2 className="popup-title">Reservez votre séjour ! </h2>

              <img
                className="img-popup-restaurant"
                src="../restaurant-popup.png"
                alt="restaurant"
              />

              <input
                type="number"
                className="popup-input"
                placeholder="Nombre de personne"
              />

              <input type="date" className="popup-input" />

              <input type="time" className="popup-input" />

              <button
                className="button-reservation"
                type="button"
                onClick={handleCLickPopup}
              >
                Accéder au paiement
              </button>
            </div>
          </div>
        )}
      </article>
    </>
  );
}

export default RestaurantCard;
