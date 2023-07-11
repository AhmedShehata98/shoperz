import React from "react";
import Image from "next/image";
import bgamaBrand from "@/assets/brands/brands.png";
import gamerzoneBrand from "@/assets/brands/gamerzone.svg";
import gomzbuzzBrand from "@/assets/brands/gomezbuzz.svg";
import iMadeBrand from "@/assets/brands/iMade.svg";
import indiezoneBrand from "@/assets/brands/indiezone.svg";
import shopaniaBrand from "@/assets/brands/shopania.svg";
import technovaBrand from "@/assets/brands/technova.svg";
import tracicBrand from "@/assets/brands/tracic.svg";
import upsideBrand from "@/assets/brands/upside.svg";
import wofactBrand from "@/assets/brands/wofact.svg";
type Props = {};

const Brands = (props: Props) => {
  return (
    <div className="container max-w-5xl py-10 mx-auto">
      <ul className="max-md:flex max-lg:flex-col max-md:gap-3 grid justify-center items-center max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-4 grid-cols-5 py-4">
        <li className="mb-10">
          <Image src={wofactBrand} alt="brand" />
        </li>
        <li className="mb-10">
          <Image src={bgamaBrand} alt="brand" />
        </li>
        <li className="mb-10">
          <Image src={gamerzoneBrand} alt="brand" />
        </li>
        <li className="mb-10">
          <Image src={gomzbuzzBrand} alt="brand" />
        </li>
        <li className="mb-10">
          <Image src={iMadeBrand} alt="brand" />
        </li>
        <li className="mb-10">
          <Image src={indiezoneBrand} alt="brand" />
        </li>
        <li className="mb-10">
          <Image src={shopaniaBrand} alt="brand" />
        </li>
        <li className="mb-10">
          <Image src={technovaBrand} alt="brand" />
        </li>
        <li className="mb-10">
          <Image src={tracicBrand} alt="brand" />
        </li>
        <li className="mb-10">
          <Image src={upsideBrand} alt="brand" />
        </li>
      </ul>
    </div>
  );
};

export default Brands;
