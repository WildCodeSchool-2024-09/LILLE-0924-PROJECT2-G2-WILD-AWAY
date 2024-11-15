import HotelCard from "../../components/HotelCard";
import RestaurantCard from "../../components/RestaurantCard";
import "./booking.css";

function Booking() {
  return (
    <>
      <h1>Nom du Pays</h1>
      <main className="booking-main">
        <section>
          <HotelCard />
        </section>

        <section>
          <RestaurantCard />
        </section>
      </main>
    </>
  );
}

export default Booking;
