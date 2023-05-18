import React from "react";
import ProductCard from "./ProductCard";
import Headtitle from "./Headtitle";
import watch from "../assets/products/watches.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Props = {
  title: string;
};

const ColumnProducts = ({ title }: Props) => {
  return (
    <div className="w-full max-md:items-center flex flex-col gap-5  bg-slate-100 ">
      <Headtitle title={title} />
      <ProductCard
        name={"watches"}
        src={watch}
        alt="watch"
        rate={3}
        title={title}
        price={300}
      />
      <ProductCard
        name={"watches"}
        src={watch}
        alt="watch"
        rate={3}
        title={title}
        price={300}
      />
      <ProductCard
        name={"watches"}
        src={watch}
        alt="watch"
        rate={3}
        title={title}
        price={300}
      />
    </div>
  );
};

export default ColumnProducts;
