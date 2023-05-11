import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image, { StaticImageData } from "next/image";
type Props = {
  src: StaticImageData;
  title: string;
  name: string;
  // style: { bg: string };
};

const Slide = ({ src, title, name }: Props) => {
  return (
    <div
      className={` mx-auto container !grid max-lg:!h-[30rem] md:grid-cols-2 text-center !gap-8 !h-[40rem] !justify-between !items-end bg-gradient-to-r `}
    >
      <div className="grid justify-center items-center text-center self-center">
        <h3 className="text-6xl max-xl:text-4xl font-light">
          NEW <span className="font-bold ">{name}</span>
          <br></br> {title}
        </h3>
        <div>
          <button className="bg-Primary-600 text-lg text-white max-lg:py-3 px-2 py-4 rounded-3xl w-fit h-fit mt-8">
            Find Out More
          </button>
        </div>
      </div>
      <div className=" overflow-hidden ">
        <Image src={{ ...src }} alt="Landscape picture" className="" />
      </div>
    </div>
  );
};

export default Slide;
