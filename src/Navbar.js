import React, { useState } from "react";
import Logo from "./assets/chains.png";
import "./Navbar.css";

function Navbar() {

  return (
    <div className="navbar">
      <div className="leftSide" >
        <img src={Logo} />
      </div>
    </div>
  );
}

export default Navbar;
