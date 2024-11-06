import "./Homepage.css";
function Homepage() {
  return (
    <main>
      <div>
        <h1>Planifie les meilleures vacances possible</h1>
        <h2>avec Wild Away</h2>
      </div>
      <section className="card-container">
        <div className="test">
          <div className="icon-container">
            <img src="/Hotel-icon.png" alt="" className="hotel" />
          </div>
          <p>Réserve les meilleurs hôtels dans le pays de ton choix !</p>
        </div>
        <div className="test">
          <div className="icon-container">
            <img src="/Restaurant-icon.png" alt="" />
          </div>
          <p>Réserve les meilleurs restaurants dans le pays de ton choix !</p>
        </div>
      </section>
      <h2>
        Sélectionnne la destination de tes rêves en cliquant sur un pays !
      </h2>
      <div className="map-container" />
    </main>
  );
}
export default Homepage;
