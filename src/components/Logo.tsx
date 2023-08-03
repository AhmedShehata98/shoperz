import React from "react";
import logo from "../assets/icons/logo.svg";
import logoPattern from "../assets/icons/logoPattern.svg";
import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/">
      <div className="relative w-36 max-lg:w-28 px-2 flex items-center">
        <Image src={logo} alt="logo" />
        <sup className="absolute -right-1.5 -top-2">
          <Image src={logoPattern} alt="logo-pattern" />
        </sup>
      </div>
    </Link>
  );
}

export default Logo;
