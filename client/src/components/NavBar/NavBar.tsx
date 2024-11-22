// import { useContext } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
// import { ThemeContext } from "../../services/ThemeContext";

function NavBar() {
  // const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav>
      <img src="/logo.png" className="logo-nav" alt="logo de Wild Away" />
      <Link to="/" className="links-nav">
        Home{" "}
      </Link>
      <Link to="about-us" className="links-nav">
        {" "}
        About us{" "}
      </Link>
    </nav>
  );
}
export default NavBar;
