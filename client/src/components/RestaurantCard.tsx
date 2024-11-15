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
        <button type="button">Reservez</button>
      </article>
    </>
  );
}

export default RestaurantCard;
