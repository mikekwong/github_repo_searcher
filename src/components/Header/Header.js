import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div id="container-header">
      <div id="container-logo">
        <a href="/">
          <img src={logo} id="logo" alt="logo" />
        </a>
      </div>
    </div>
  );
};

export default Header;
