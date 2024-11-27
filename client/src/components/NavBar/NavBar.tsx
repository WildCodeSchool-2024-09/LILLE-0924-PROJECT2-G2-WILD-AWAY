import "./NavBar.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UseTheme } from "../../services/ThemeContext";
import Markers from "../Markers";

function NavBar() {
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [selection, setSelection] = useState(0);

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
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  interface KeyboardEvent {
    key: string;
  }

  const handleKeyEnter = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      navigate(`/booking/${results[selection].id}`);
      setInput("");
    } else if (event.key === "ArrowDown") {
      if (selection === -1) {
        setSelection(0);
      } else if (selection < results.length - 1) {
        setSelection(selection + 1);
      }
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
            onKeyDown={handleKeyEnter}
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
      />
    </nav>
  );
}
export default NavBar;
