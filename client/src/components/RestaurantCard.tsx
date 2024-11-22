import { useState } from "react";

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

  return (
    <>
      <article className="card">
        <div className="restaurant-details">
          <img
            src={currentRestaurant.image_url}
            alt={currentRestaurant.name}
            className="booking-card-img"
          />
          <h2>{currentRestaurant.name}</h2>
          <p className="booking-car-description">
            {currentRestaurant.description}
          </p>
          <p>{currentRestaurant.average_price_per_person}€</p>
        </div>

        <div className="navigation-buttons">
          <button type="button" onClick={handlePreviousRestaurant}>
            Précédent
          </button>
          <button type="button" onClick={handleNextRestaurant}>
            Suivant
          </button>
        </div>

        <button type="button" onClick={handleCLickPopup}>
          Reservez
        </button>

        {popupVisible && (
          <div className="popup-overlay">
            <div className="restaurant-popup">
              <div className="title-color">
                <h2>Reservez votre séjour ! </h2>
              </div>
              <label htmlFor="personNumber">
                Pour combien de personnes ? :
                <input type="number" className="personNumber" />
              </label>
              <label className="vacationDate-container" htmlFor="vacationDate">
                Pour quelle date ? :
                <img
                  className="img-popup-restaurant"
                  src="../restaurant-popup.png"
                  alt=""
                />
                <input type="date" className="vacationDate" />
              </label>
              <label className="vacationHour-container" htmlFor="vacationHour">
                Pour quelle heure ? :
                <input type="time" className="vacationHour" />
              </label>
              <p className="prix">Prix :</p>
              <button type="button" onClick={handleCLickPopup}>
                Valider
              </button>
            </div>
          </div>
        )}
      </article>
    </>
  );
}

export default RestaurantCard;
