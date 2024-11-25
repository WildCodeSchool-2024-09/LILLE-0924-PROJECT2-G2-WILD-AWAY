import "./Footer.css";
import { UseTheme } from "../../services/ThemeContext";

function Footer() {
  const themeContext = UseTheme();
  const theme = themeContext ? themeContext.theme : "defaultTheme";

  return (
    <footer className={theme}>
      <section>
        <div className="reseau">
          <img src="/twitter.png" className="logo" alt="logo de Twitter" />{" "}
          @WildAway <br />
          <img src="/instagram.png" className="logo" alt="logo de Instagram" />{" "}
          @WildAway
        </div>
        <div className="contact">
          <p>© WildAway 2024 </p>
        </div>
        <div>
          {" "}
          <p>Nous contacter</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
