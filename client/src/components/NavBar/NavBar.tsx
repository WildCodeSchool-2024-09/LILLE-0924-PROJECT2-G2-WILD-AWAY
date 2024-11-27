import "./NavBar.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UseTheme } from "../../services/ThemeContext";
import Markers from "../Markers";

function NavBar() {
  const navigate = useNavigate();
  const [rotation, setRotation] = useState(0);
  const [input, setInput] = useState("");

  const handleChange = (value: string) => {
    setInput(value);
  };

  const results = Markers.filter((city) => {
    return city.name.toLowerCase().includes(input.toLowerCase());
  });

  const themeContext = UseTheme();
  if (!themeContext) {
    return null;
  }
  const { theme, setTheme } = themeContext;

  const handleDarkMode = () => {
    setRotation((prevRotation) => prevRotation - 180);
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
      <div className="searchbar-container">
        <div className={`input-wrapper ${theme}`}>
          <FaSearch id="search-icon" />
          <input
            className={theme}
            placeholder="Chercher une ville..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </div>
      {input ? (
        <div className={`results-list ${theme}`}>
          {results.map((result) => (
            <div
              className="dropdown"
              onClick={() => {
                navigate(`/booking/${result.id}`);
                setInput("");
              }}
              key={result.name}
              onKeyDown={() => navigate(`/booking/${result.id}`)}
            >
              {result.name}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
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
        style={{
          cursor: "pointer",
          transform: `rotate(${rotation}deg)`,
          transition: "transform 1s ease",
        }}
      />
    </nav>
  );
}
export default NavBar;
