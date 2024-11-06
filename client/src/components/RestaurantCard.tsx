const restaurantCard = {
  imgSrc: "./src/pages/booking/restaurant.jpg",
  name: "Restaurant Name",
  description: "Restaurant Description",
  cost: "Restaurant Cost",
};

function RestaurantCard() {
  return (
    <>
      <article className="card">
        <img
          src={restaurantCard.imgSrc}
          alt={restaurantCard.name}
          height="200px"
          width="200px"
        />
        <h2>{restaurantCard.name}</h2>
        <p>{restaurantCard.description}</p>
        <p>{restaurantCard.cost}</p>
        <button>Reservez</button>
      </article>
    </>
  );
}

export default RestaurantCard;
