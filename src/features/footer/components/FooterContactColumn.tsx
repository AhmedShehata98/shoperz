import Link from "next/link";
import React from "react";
import Logo from "@/components/Logo";
import {
  AiFillYoutube,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function FooterContactColumn() {
  return (
    <div className="mt-3 lg:mt-0">
      <Logo />
      <ul className="grid grid-flow-row gap-5 mt-10 ps-3">
        <li>
          <b className="capitalize">headquarters</b>
          <p className="text-Grey-600 capitalize">
            alexandria , smouha - Egypt
          </p>
        </li>
        <li>
          <b className="capitalize">email</b>
          <p className="text-Grey-600 ">example@shoperz.com</p>
        </li>
        <li>
          <b className="capitalize">telephone</b>
          <p className="text-Grey-600 ">(+20) 01234567891</p>
        </li>
        <li className="flex items-center justify-start gap-5 text-2xl text-Grey-600 mt-7">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <BsInstagram />
          </a>
          <a href="#">
            <AiOutlineLinkedin />
          </a>
          <a href="#">
            <AiOutlineTwitter />
          </a>
          <a href="#">
            <AiFillYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterContactColumn;
