import React from "react";
import "./Sass/App.style.scss";
import Header from "./container/header/Header";
import Main from "./container/Main/Main";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default App;
