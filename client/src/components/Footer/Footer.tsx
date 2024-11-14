import "./Footer.css";

function Footer() {
  return (
    <footer>
      <section className="footer">
        <img
          src="./public/twitter.png"
          className="logo"
          alt="logo de Twitter"
        />{" "}
        @WildAway
        <img
          src="./public/instagram.png"
          className="logo"
          alt="logo de Instagram"
        />{" "}
        @WildAway
        <p className="credit">© WildAway 2024 </p>
        <p className="contact">Nous contacter</p>
      </section>
    </footer>
  );
}

export default Footer;
