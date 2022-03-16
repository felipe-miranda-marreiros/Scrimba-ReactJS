import "../../Sass/Navbar.scss";
import airbnbLogo from "../../images/airbnb-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={airbnbLogo} alt="Airbnb Logo" />
    </nav>
  );
};

export default Navbar;
