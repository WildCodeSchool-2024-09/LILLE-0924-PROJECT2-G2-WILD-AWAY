import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HotelCard from "../../components/HotelCard";
import RestaurantCard from "../../components/RestaurantCard";
import "./booking.css";

interface BookingData {
  city: string;
  hotels: {
    image_url: string;
    name: string;
    description: string;
    price_per_night: string;
  }[];
  restaurants: {
    image_url: string;
    name: string;
    description: string;
    average_price_per_person: string;
  }[];
}

function Booking() {
  const { id } = useParams();
  const [bookingData, setBookingData] = useState<BookingData | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3310/api/booking/${id}`)
      .then((response) => response.json())
      .then((itemsFromApi) => {
        return setBookingData(itemsFromApi);
      });
  }, [id]);

  return (
    <>
      {bookingData && (
        <>
          <h1>{bookingData.city}</h1>
          <main className="booking-main">
            <section>
              <HotelCard bookingData={bookingData} />
            </section>

            <section>
              <RestaurantCard bookingData={bookingData} />
            </section>
          </main>
        </>
      )}
    </>
  );
}

export default Booking;
