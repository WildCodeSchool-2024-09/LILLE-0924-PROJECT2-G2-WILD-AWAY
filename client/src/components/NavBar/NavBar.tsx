import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <img
        src="./public/logo.png"
        className="logoNav"
        alt="logo de Wild Away"
      />
      <ul className="linksNav">
        <li>Home</li>
        <li>About us</li>
      </ul>
    </nav>
  );
}

export default NavBar;
