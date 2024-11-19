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

  const handleCLickPopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <>
      <article className="card">
        <img
          src={restaurants[0].image_url}
          alt={restaurants[0].name}
          height="200px"
          width="200px"
          className="booking-card-img"
        />
        <h2>{restaurants[0].name}</h2>
        <p>{restaurants[0].description}</p>
        <p>{restaurants[0].average_price_per_person}€</p>
        <button type="button" onClick={handleCLickPopup}>
          Reservez
        </button>
      </article>

      {popupVisible && (
        <div className="popup-overlay">
        <div className="restaurant-popup">
          <div className="popup-content">
            <div className="title-color"><h2>Reservez votre séjour ! </h2></div>
            <label htmlFor="personNumber" >
              Pour combien de personnes ? :
              <input type="number" className="personNumber" />
            </label>
            <label className="vacationDate-container" htmlFor="vacationDate" >
              Pour quelle date ? :<img className="img-popup-restaurant" src="../restaurant-popup.png" alt="" />
              <input type="date" className="vacationDate" />
            </label>
            <label className="vacationHour-container" htmlFor="vacationHour">
              Pour quelle heure ? :
              <input type="time" className="vacationHour" />
            </label>
            <p className="prix">Prix :</p>
            <button type="button" onClick={handleCLickPopup}>
              Fermer
            </button>
          </div>
        </div>
        </div>
      )}
    </>
  );
}

export default RestaurantCard;
