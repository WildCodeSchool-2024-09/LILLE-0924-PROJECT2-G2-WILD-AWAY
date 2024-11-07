import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <img
        src="./public/logo.png"
        className="logo-nav"
        alt="logo de Wild Away"
      />
      <div className="links-nav">
        <a href="https://www.google.com/maps?authuser=0">Home</a>
        <a href="https://www.google.com/maps?authuser=0">About us</a>
      </div>
    </nav>
  );
}

export default NavBar;
