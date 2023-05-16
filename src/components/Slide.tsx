import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image, { StaticImageData } from "next/image";
type Props = {
  src: StaticImageData;
  title: React.ReactNode;
  name: string;
  bg: string;
};

const Slide = ({ src, title, bg }: Props) => {
  return (
    <div
      className={`max-w-full h-[30rem] max-md:h-[27rem] flex items-center justify-between ${bg} max-md:pt-6`}
    >
      <section className="container max-w-5xl mx-auto flex h-full max-md:flex-col justify-between items-center gap-4">
        <div className="flex flex-col items-start justify-center gap-10 md:basis-1/2 lg:basis-2/5 max-md:w-full max-md:px-4 ">
          <h2 className="text-start uppercase text-4xl max-xl:text-4xl font-thin max-md:text-3xl">
            {title}
          </h2>
          <button className="bg-Primary-600 text-lg text-white py-2 px-6 rounded-3xl w-fit h-fit max-md:w-full">
            Find Out More
          </button>
        </div>
        <figure className="md:basis-1/2 lg:basis-3/5 self-end flex items-center justify-center max-md:w-full max-md:px-4">
          <Image
            src={{ ...src }}
            alt="Landscape picture"
            className="block w-full"
          />
        </figure>
      </section>
    </div>
  );
};

export default Slide;
