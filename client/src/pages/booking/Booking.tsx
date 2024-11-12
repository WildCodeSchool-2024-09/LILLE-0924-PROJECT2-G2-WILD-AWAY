import HotelCard from "../../components/HotelCard";
import RestaurantCard from "../../components/RestaurantCard";
import "./Booking.css";
import { useParams } from "react-router-dom";
function Booking() {
  const { cityId } = useParams();
  return (
    <>
      <h1>Nom du Pays{cityId}</h1>
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
