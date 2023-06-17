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
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom , ${gradiantColot.from} , ${gradiantColot.to})`,
      }}
      className={`flex items-center gap-4 justify-between cursor-pointer hover:scale-105 transition w-fit px-14 py-10 text-center `}
    >
      <div className="lg:text-xl font-light uppercase">{title}</div>
      <div className="w-30 overflow-hidden">
        <Image src={bannerImage} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
