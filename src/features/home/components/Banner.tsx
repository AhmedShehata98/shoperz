import React from "react";
import Image, { StaticImageData } from "next/image";
type Props = {
  bannerImage: StaticImageData;
  title: React.ReactNode;
  gradiantColot: {
    from: string;
    to: string;
  };
};

const Banner = ({ bannerImage, title, gradiantColot }: Props) => {
  return (
    <li
      style={{
        backgroundImage: `linear-gradient(to bottom , ${gradiantColot.from} , ${gradiantColot.to})`,
      }}
      className={`w-full md:basis-1/2 flex flex-col sm:flex-row items-center gap-4 justify-between cursor-pointer hover:scale-105 transition p-4 sm:p-6 text-center mb-5`}
    >
      <div className="lg:text-xl font-light uppercase">{title}</div>
      <div className="w-30 overflow-hidden">
        <Image src={bannerImage} alt="banner" />
      </div>
    </li>
  );
};

export default Banner;
