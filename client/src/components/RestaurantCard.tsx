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
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, minus
          doloremque tempora suscipit ullam doloribus sit pariatur. Quasi,
          accusamus? Omnis animi deleniti maiores doloremque fugit dolore non
          alias cumque amet.
        </p>
        <p>{restaurantCard.cost}</p>
        <button type="button">Reservez</button>
      </article>
    </>
  );
}

export default RestaurantCard;
