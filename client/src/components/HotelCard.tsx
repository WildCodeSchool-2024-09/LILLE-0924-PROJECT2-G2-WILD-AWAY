const hotelCard = {
  imgSrc: "./src/pages/booking/hotel.jpg",
  name: "Hotel Name",
  description: "Hotel Description",
  cost: "Hotel Cost",
};

function HotelCard() {
  return (
    <>
      <article className="card">
        <img
          src={hotelCard.imgSrc}
          alt={hotelCard.name}
          height="200px"
          width="200px"
        />
        <h2>{hotelCard.name}</h2>
        <p>{hotelCard.description}</p>
        <p>{hotelCard.cost}</p>
        <button>Reservez</button>
      </article>
    </>
  );
}

export default HotelCard;
