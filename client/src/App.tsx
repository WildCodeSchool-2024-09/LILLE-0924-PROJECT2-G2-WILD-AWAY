import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import { ThemeProvider } from "./services/ThemeContext";
// import { useState } from "react";

// interface darkModeProps {
//   darkMode: boolean;
//   setDarkMode: (darkMode: string) => void;

function App() {
  // const [darkMode, setDarkMode] = useState<string>("");
  // const handleDarkMode = () => {
  //   if (!darkMode) {
  //     setDarkMode("dark-mode");
  //   } else {
  //     setDarkMode("");
  //   }
  // };
  return (
    <>
      <ThemeProvider>
        <img src="/darkMode.png" alt="darkMode" className="img-darkMode" />
        <NavBar />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
