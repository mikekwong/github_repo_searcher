import React from "react";
import "./App.css";
import Search from "./Search/Search";
import logo from "./assets/logo.png";

const App = () => {
  return (
    <div id="App">
      <div id="header">
        <img src={logo} id="logo" alt="logo" />
      </div>
      <div id="search">
        <p className="headline">Even Financial</p>
        <p className="headline">Github Repository Search</p>
        <Search />
      </div>
    </div>
  );
};

export default App;
