import HotelCard from "../../components/HotelCard";
import RestaurantCard from "../../components/RestaurantCard";
import "./Booking.css";
import { useOutletContext } from "react-router-dom";

function Booking() {
  const bookingData = useOutletContext<{ country: string }>();

  return (
    <>
      <h1>{bookingData.country}</h1>

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
