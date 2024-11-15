import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <img src="/logo.png" className="logo-nav" alt="logo de Wild Away" />
      <Link to="/" className="links-nav">
        Home{" "}
      </Link>
      <Link to="AboutUs" className="links-nav">
        {" "}
        About us{" "}
      </Link>
    </nav>
  );
}

export default NavBar;
