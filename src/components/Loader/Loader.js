import React from "react";
import "./Loader.scss";
import loader from "../../assets/loader.svg";

const Loader = () => {
  return (
    <div id="loader">
      <img src={loader} alt="loader" />
    </div>
  );
};

export default Loader;
