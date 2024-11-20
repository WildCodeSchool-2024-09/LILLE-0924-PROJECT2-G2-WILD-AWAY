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

  const handleCLickPopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <>
      <article className="card">
        <img
          src={hotels[0].image_url}
          alt={hotels[0].name}
          height="200px"
          width="200px"
          className="booking-card-img"
        />
        <h2>{hotels[0].name}</h2>
        <p>{hotels[0].description}</p>
        <p>{hotels[0].price_per_night}€</p>
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
              Pour quelle dates ? :
              <input type="date" className="vacationDate" /> <br />
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
