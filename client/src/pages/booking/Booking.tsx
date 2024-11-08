import HotelCard from "../../components/HotelCard";
import RestaurantCard from "../../components/RestaurantCard";
import "./Booking.css";

function Booking() {
  return (
    <>
      <h1>Nom du Pays</h1>

      <main>
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
