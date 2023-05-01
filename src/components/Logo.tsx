import React from "react";
import logo from "../assets/icons/logo.svg";
import logoPattern from "../assets/icons/logoPattern.svg";

function Logo() {
  return (
    <div className="relative px-2 flex items-center w-fit">
      <img src={logo.src} alt="logo" />
      <sup className="absolute -right-1.5 -top-2">
        <img src={logoPattern.src} alt="logo-pattern" />
      </sup>
    </div>
  );
}

export default Logo;
