import React from "react";
import Image from "next/image";
import brand from "../assets/brands/brands.png";
type Props = {};

const Brands = (props: Props) => {
  return (
    <div className="container max-w-5xl py-10 mx-auto">
      <div className="grid justify-center items-center max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-4 grid-cols-5">
        <div>
          <Image src={brand} alt="brand" />
        </div>
        <div>
          <Image src={brand} alt="brand" />
        </div>
        <div>
          <Image src={brand} alt="brand" />
        </div>
        <div>
          <Image src={brand} alt="brand" />
        </div>
        <div>
          <Image src={brand} alt="brand" />
        </div>
        <div>
          <Image src={brand} alt="brand" />
        </div>
        <div>
          <Image src={brand} alt="brand" />
        </div>
        <div>
          <Image src={brand} alt="brand" />
        </div>
        <div>
          <Image src={brand} alt="brand" />
        </div>
        <div>
          <Image src={brand} alt="brand" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
