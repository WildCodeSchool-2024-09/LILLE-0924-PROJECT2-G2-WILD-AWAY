import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/booking")
      .then((response) => response.json())
      .then((itemsFromApi) => setBookingData(itemsFromApi));
  }, []);

  return (
    <>
      <Outlet context={[bookingData]} />
    </>
  );
}

export default App;
