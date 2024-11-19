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
            <div className="slider">
              <div className="slide-track">
                <div className="slide">
                  <img
                    src="../public/slide1.jpg"
                    className="img-slide"
                    alt="slide1"
                  />
                </div>
                <div className="slide">
                  <img
                    src="../public/slide2.jpg"
                    className="img-slide"
                    alt="slide2"
                  />
                </div>
                <div className="slide">
                  <img
                    src="../public/slide3.jpg"
                    className="img-slide"
                    alt="slide3"
                  />
                </div>
                <div className="slide">
                  <img
                    src="../public/slide4.jpg"
                    className="img-slide"
                    alt="slide4"
                  />
                </div>
                <div className="slide">
                  <img
                    src="../public/slide5.jpg"
                    className="img-slide"
                    alt="slide5"
                  />
                </div>
                <div className="slide">
                  <img
                    src="../public/slide6.jpg"
                    className="img-slide"
                    alt="slide6"
                  />
                </div>
              </div>
            </div>
            <section>
              <HotelCard bookingData={bookingData} />
            </section>

            <section>
              <RestaurantCard bookingData={bookingData} />
            </section>

            <div className="slider">
              <div className="slide-track">
                <div className="slide">
                  <img
                    src="../public/slide7.jpg"
                    className="img-slide"
                    alt="slide7"
                  />
                </div>
                <div className="slide">
                  <img
                    src="../public/slide8.jpg"
                    className="img-slide"
                    alt="slide8"
                  />
                </div>
                <div className="slide">
                  <img
                    src="../public/slide9.jpg"
                    className="img-slide"
                    alt="slide9"
                  />
                </div>
                <div className="slide">
                  <img
                    src="../public/slide10.jpg"
                    className="img-slide"
                    alt="slide10"
                  />
                </div>
                <div className="slide">
                  <img
                    src="../public/slide11.jpg"
                    className="img-slide"
                    alt="slide11"
                  />
                </div>
                <div className="slide">
                  <img
                    src="../public/slide12.jpg"
                    className="img-slide"
                    alt="slide12"
                  />
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
}

export default Booking;
