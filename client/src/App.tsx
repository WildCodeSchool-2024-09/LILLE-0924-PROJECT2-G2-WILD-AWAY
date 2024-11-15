import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/booking")
      .then((response) => response.json())
      .then((itemsFromApi) => setBookingData(itemsFromApi));
  }, []);

  return (
    <>
      <NavBar />
      <Outlet context={[bookingData]} />
      <Footer />
    </>
  );
}

export default App;
