import Logo from "@/components/Logo";
import Link from "next/link";
import React from "react";
import {
  AiFillYoutube,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import visaLogo from "../assets/icons/visa.png";
import mastercardLogo from "../assets/icons/mastercard.svg";
import paypalLogo from "../assets/icons/paypal.svg";
import cashLogo from "../assets/icons/cash-on-delivery.png";
import { useRouter } from "next/router";
import Image from "next/image";

function Footer() {
  const footerRef = React.useRef<HTMLElement | null>(null);
  const { pathname } = useRouter();
  React.useLayoutEffect(() => {
    if (pathname === "/register") {
      footerRef.current?.classList.add("hidden");
    } else {
      footerRef.current?.classList.remove("hidden");
    }
  }, [pathname]);

  return (
    <footer ref={footerRef} className="w-full mt-auto">
      <section className="bg-Grey-800 py-6 px-2">
        <div className="container mx-auto max-w-5xl flex items-center justify-between gap-4 flex-wrap">
          <h5 className="capitalize text-white ">
            <b>subscribe to out newsletter</b> - get a{" "}
            <b>
              <u>$20 copon</u>
            </b>{" "}
            for your first order !
          </h5>
          <form
            action=""
            className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center rounded-full overflow-hidden"
          >
            <input
              type="text"
              placeholder="enter your email address .."
              className="px-4 py-2 w-full focus:outline-none focus:bg-Grey-100"
            />
            <button className="w-16 flex items-center justify-center bg-Primary-600 py-2 text-white text-2xl hover:bg-Primary-500">
              <RiSendPlaneFill />
            </button>
          </form>
        </div>
      </section>
      <section className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-start gap-5 px-2 pt-12">
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
        <div className="mt-3 lg:mt-0 px-2">
          <b className="capitalize text-lg">categories</b>
          <ul className="grid grid-flow-row-dense mt-6 gap-3">
            <Link className="text-Grey-600 hover:underline" href={"TV-&-Audio"}>
              TV & Audio
            </Link>
            <Link
              className="text-Grey-600 hover:underline"
              href={"smartphones"}
            >
              smartphones
            </Link>
            <Link
              className="text-Grey-600 hover:underline"
              href={"Laptops-&-PCs"}
            >
              Laptops & PCs
            </Link>
            <Link className="text-Grey-600 hover:underline" href={"Gadgets"}>
              Gadgets
            </Link>
            <Link
              className="text-Grey-600 hover:underline"
              href={"photo & video"}
            >
              photo & video
            </Link>
            <Link className="text-Grey-600 hover:underline" href={"Gifts"}>
              Gifts
            </Link>
            <Link className="text-Grey-600 hover:underline" href={"Books"}>
              Books
            </Link>
            <Link className="text-Grey-600 hover:underline" href={"Toys"}>
              Toys
            </Link>
          </ul>
        </div>
        <div className="mt-4 lg:mt-0 px-2">
          <b className="capitalize text-lg">useful Links</b>
          <ul className="grid grid-flow-row-dense mt-6 gap-3">
            <Link className="text-Grey-600 hover:underline" href={"about"}>
              about
            </Link>
            <Link className="text-Grey-600 hover:underline" href={"content"}>
              content
            </Link>
            <Link className="text-Grey-600 hover:underline" href={"whishlist"}>
              whishlist
            </Link>
            <Link className="text-Grey-600 hover:underline" href={"compare"}>
              compare
            </Link>
            <Link className="text-Grey-600 hover:underline" href={"FAQ"}>
              FAQ
            </Link>
            <Link
              className="text-Grey-600 hover:underline"
              href={"terms-&-conditions"}
            >
              terms & conditions
            </Link>
            <Link
              className="text-Grey-600 hover:underline"
              href={"privacy-policy"}
            >
              privacy policy
            </Link>
            <Link
              className="text-Grey-600 hover:underline"
              href={"cookie-policy"}
            >
              cookie policy
            </Link>
          </ul>
        </div>
        <div className="mt-4 lg:mt-0 px-2">
          <b className="capitalize text-lg">customer service</b>
          <ul className="grid grid-flow-row-dense mt-6 gap-3">
            <Link className="text-Grey-600 hover:underline" href={"mt account"}>
              mt account
            </Link>
            <Link className="text-Grey-600 hover:underline" href={"my cart"}>
              my cart
            </Link>
            <Link
              className="text-Grey-600 hover:underline"
              href={"track order"}
            >
              track order
            </Link>
            <Link
              className="text-Grey-600 hover:underline"
              href={"returns & Exchanges"}
            >
              returns & Exchanges
            </Link>
            <Link
              className="text-Grey-600 hover:underline"
              href={"repair services"}
            >
              repair services
            </Link>
            <Link className="text-Grey-600 hover:underline" href={"support"}>
              support
            </Link>
          </ul>
        </div>
      </section>
      <section className="border-t bg-Grey-100 border-Grey-300 py-1 mt-12 px-3">
        <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row justify-between items-start gap-3">
          <p className="text-gray-500">© Shoperz 2023 - All Rights Reserved</p>
          <div className="flex items-center gap-9 lg:gap-6">
            <Image src={visaLogo} alt="payments-logo" />
            <Image src={mastercardLogo} alt="payments-logo" />
            <Image src={paypalLogo} alt="payments-logo" />
            <Image src={cashLogo} alt="payments-logo" />
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
