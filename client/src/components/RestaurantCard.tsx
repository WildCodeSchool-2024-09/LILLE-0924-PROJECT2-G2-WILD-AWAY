import { useOutletContext } from "react-router-dom";

function RestaurantCard() {
  const bookingData = useOutletContext<{
    image_url: string;
    name: string;
    description: string;
    average_price_per_person: string;
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
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, minus
          doloremque tempora.
        </p>
        <p>{bookingData.average_price_per_person}</p>
        <button type="button">Reservez</button>
      </article>
    </>
  );
}

export default RestaurantCard;
