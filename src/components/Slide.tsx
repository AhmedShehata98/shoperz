import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { routes } from "@/constants/Routes";
type Props = {
  src: StaticImageData;
  title: React.ReactNode;
  name: string;
};

const Slide = ({ src, title }: Props) => {
  return (
    <div
      className={`max-w-full h-[30rem] max-md:h-[28rem] flex items-center justify-between max-md:pt-6`}
    >
      <section className="container max-w-5xl mx-auto flex h-full max-md:flex-col justify-between items-center gap-4">
        <div className="flex flex-col items-start justify-center gap-10 md:basis-1/2 lg:basis-2/5 max-md:w-full max-md:px-4 ">
          <span className="flex items-center justify-start flex-wrap gap-2 text-2xl uppercase max-lg:text-xl">
            {title}
          </span>
          <Link className="custom-button" href={routes.shop}>
            Find Out More
          </Link>
        </div>
        <figure className="md:basis-1/2 lg:basis-3/5 object-cover h-full flex items-center justify-center max-md:w-full max-md:px-4">
          <Image
            src={{ ...src }}
            alt="Landscape picture"
            className="block w-full h-full object-cover"
          />
        </figure>
      </section>
    </div>
  );
};

export default Slide;
