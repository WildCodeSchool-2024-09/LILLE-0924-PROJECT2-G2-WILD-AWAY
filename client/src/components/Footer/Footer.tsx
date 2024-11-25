import "./Footer.css";

function Footer() {
  return (
    <footer>
      <section className="footer">
        <div className="reseau">
          <div className="twitter">
            <img src="/twitter.png" className="logo" alt="logo de Twitter" />{" "}
            @WildAway <br />
          </div>
          <div className="instagram">
            <img
              src="/instagram.png"
              className="logo"
              alt="logo de Instagram"
            />{" "}
            @WildAway
          </div>
        </div>
        <div className="contact">
          <p>© WildAway 2024 </p>
          <p className="contact-us">Nous contacter</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
