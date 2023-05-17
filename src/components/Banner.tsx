import React from "react";
import Image from "next/image";
import banner from "../assets/banner/JBL-Audio-Speakers-PNG-Background-Image 1.png";
type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="flex cursor-pointer hover:scale-105 transition w-fit px-14 py-10 text-center items-center bg-gradient-to-b from-[#F2FFF7] to-[#C3F4FF]">
      <div className="lg:text-3xl font-light">
        PORTABLE SPEAKERS COLLECTION <strong className="font-bold">2023</strong>
      </div>
      <div>
        <Image className="" src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;