import "./Footer.css";

function Footer() {
  return (
    <footer>
      <section className="footer">
        <div className="reseau">
          <img src="/twitter.png" className="logo" alt="logo de Twitter" />{" "}
          @WildAway
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
