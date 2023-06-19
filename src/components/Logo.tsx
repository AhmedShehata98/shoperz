import React from "react";
import logo from "../assets/icons/logo.svg";
import logoPattern from "../assets/icons/logoPattern.svg";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <div className="relative w-36 max-lg:w-28 px-2 flex items-center">
        <img src={logo.src} alt="logo" />
        <sup className="absolute -right-1.5 -top-2">
          <img src={logoPattern.src} alt="logo-pattern" />
        </sup>
      </div>
    </Link>
  );
}

export default Logo;
