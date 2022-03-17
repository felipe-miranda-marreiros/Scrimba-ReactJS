import globeIcon from "../images/globe-icon.png";
import "../Sass/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="container navbar">
      <img src={globeIcon} alt="World icon"></img>
      <span>my travel journal.</span>
    </nav>
  );
};

export default Navbar;
