import MapElement from "../../components/Map";
import "./Homepage.css";
import { UseTheme } from "../../services/ThemeContext";

function Homepage() {
  const themeContext = UseTheme();
  const theme = themeContext ? themeContext.theme : "light";
  // const setTheme = themeContext ? themeContext.theme : "defaultTheme";

  return (
    <main className={`homepage-main ${theme}`}>
      <div className="div-title">
        <h1 className="homepage-title">
          Planifie les meilleures vacances possible
        </h1>
        <h2 className="homepage-subtitle">avec Wild Away</h2>
      </div>
      <section className="homepage-card-container">
        <div className={`homepage-cards ${theme}`}>
          <div className="icon-container">
            <img src="/Hotel-icon.png" alt="" className="homepage-card-img" />
          </div>
          <p className="homepage-text">
            Réserve les meilleurs hôtels dans le pays de ton choix !
          </p>
        </div>
        <div className={`homepage-cards ${theme}`}>
          <div className="icon-container">
            <img
              src="/Restaurant-icon.png"
              alt=""
              className="homepage-card-img"
            />
          </div>
          <p className="homepage-text">
            Réserve les meilleurs restaurants dans le pays de ton choix !
          </p>
        </div>
      </section>
      <h2 className="homepage-subtitle">
        Sélectionnne la destination de tes rêves en cliquant sur un pays !
      </h2>
      <div className="map-container">
        {" "}
        <MapElement />
      </div>
    </main>
  );
}
export default Homepage;
