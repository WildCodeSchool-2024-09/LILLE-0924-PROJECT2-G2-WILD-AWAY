import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import { ThemeProvider } from "./services/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <NavBar />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
