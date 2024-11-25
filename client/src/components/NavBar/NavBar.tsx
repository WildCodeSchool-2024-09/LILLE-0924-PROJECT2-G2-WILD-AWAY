import "./NavBar.css";
import { Link } from "react-router-dom";
import { UseTheme } from "../../services/ThemeContext";

function NavBar() {
  const themeContext = UseTheme();
  if (!themeContext) {
    return null;
  }
  const { theme, setTheme } = themeContext;

  const handleDarkMode = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <nav className={theme}>
      <img src="/logo.png" className="logo-nav" alt="logo de Wild Away" />
      <Link to="/" className="links-nav">
        Home{" "}
      </Link>
      <Link to="about-us" className="links-nav">
        {" "}
        About us{" "}
      </Link>
      <img
        src="/darkMode.png"
        alt="darkMode"
        className="img-darkMode"
        onClick={handleDarkMode}
        onKeyUp={handleDarkMode}
      />
    </nav>
  );
}
export default NavBar;
