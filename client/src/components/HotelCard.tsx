import { useState } from "react";

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

  return (
    <>
      <article className="card">
        <img
          src={currentHotel.image_url}
          alt={currentHotel.name}
          className="booking-card-img"
        />
        <h2>{currentHotel.name}</h2>
        <p>{currentHotel.description}</p>
        <p>{currentHotel.price_per_night}€</p>
        <div className="navigation-buttons">
          <button type="button" onClick={handlePreviousHotel}>
            Précédent
          </button>
          <button type="button" onClick={handleNextHotel}>
            Suivant
          </button>
        </div>
        <button type="button" onClick={handleCLickPopup}>
          Reservez
        </button>
      </article>

      {popupVisible && (
        <div className="popup-overlay">
          <div className="hotel-popup">
            <div className="title-color">
              <h2>Reservez votre séjour !</h2>
            </div>
            <img className="img-popup-hotel" src="../hotel-popup.png" alt="" />

            <label className="personNumber-container" htmlFor="personNumber">
              Pour combien de personnes ? :
              <input type="number" className="personNumber" />
            </label>
            <label htmlFor="vacationDate">
              Pour quelle dates ? :{" "}
              <img
                className="img-popup-hotel"
                src="../hotel-popup.png"
                alt=""
              />
              <input type="date" className="vacationDate" />
              au
              <input type="date" className="vacationDate" />
            </label>
            <p>Prix :</p>
            <button type="button" onClick={handleCLickPopup}>
              Valider
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default HotelCard;
