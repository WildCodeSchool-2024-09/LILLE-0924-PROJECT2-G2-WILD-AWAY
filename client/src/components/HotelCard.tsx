import { useOutletContext } from "react-router-dom";

function HotelCard() {
  const bookingData = useOutletContext<{
    image_url: string;
    name: string;
    description: string;
    price_per_night: string;
  }>();

  return (
    <>
      <article className="card">
        <img
          src={bookingData.image_url}
          alt={bookingData.name}
          height="200px"
          width="200px"
          className="booking-card-img"
        />
        <h2>{bookingData.name}</h2>
        <p>{bookingData.description}</p>
        <p>{bookingData.price_per_night}</p>
        <button type="button">Reservez</button>
      </article>
    </>
  );
}

export default HotelCard;
