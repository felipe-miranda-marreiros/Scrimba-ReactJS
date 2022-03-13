import React from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ButtonLinks from "./components/ButtonLinks/ButtonLinks";
import Avatar from "./components/Avatar/Avatar";

import twitterLogo from "./img/Twitter-Icon.png";
import facebookLogo from "./img/Facebook-Icon.png";
import instagramLogo from "./img/Instagram-Icon.png";
import githubLogo from "./img/GitHub-Icon.png";

import btnLogoMail from "./img/Mail.png";
import btnLogoLinkedin from "./img/linkedin.png";

import authorAvatar from "./img/avatar.png";

import "./style.scss";

const App = () => {
  return (
    <div className="container">
      <Header>
        <Avatar avatar={authorAvatar} />
        <ButtonLinks btn1={btnLogoMail} btn2={btnLogoLinkedin} />
      </Header>
      <Main />
      <Footer
        logo1={twitterLogo}
        alt="Twitter logo"
        logo2={facebookLogo}
        alt2="Facebook logo"
        logo3={instagramLogo}
        alt3="Instagram logo"
        logo4={githubLogo}
        alt4="Github logo"
      />
    </div>
  );
};

export default App;
