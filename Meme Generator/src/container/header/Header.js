import React from "react";
import Navbar from "../../components/Navbar/Navbar.component";
import trollFace from "../../img/troll-face.png";

const Header = () => {
  return (
    <header>
      <Navbar
        img={trollFace}
        alt="Troll Face"
        title="Meme Generator"
        description="React Course - Project 3"
      />
    </header>
  );
};

export default Header;
