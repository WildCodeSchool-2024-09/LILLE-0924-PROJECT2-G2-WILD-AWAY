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
        <button type="button">Reservez</button>
      </article>
    </>
  );
}

export default HotelCard;
