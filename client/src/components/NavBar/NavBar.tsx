import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <img
        src="./public/logo.png"
        className="logoNav"
        alt="logo de Wild Away"
      />
      <div className="linksNav">
        <a href="https://www.google.com/maps?authuser=0">Home</a>
        <a href="https://www.google.com/maps?authuser=0">About us</a>
      </div>
    </nav>
  );
}

export default NavBar;
