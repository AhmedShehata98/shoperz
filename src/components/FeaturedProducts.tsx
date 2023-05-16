import React from "react";
import Product1 from "../assets/products/Product.png";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

import Product from "./Product";
import Headtitle from "./Headtitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from "swiper";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import SlidesProducts from "./SlidesProducts";

type Props = {};

const FeaturedProducts = (props: Props) => {
  const p = [
    {
      src: Product1,
      name: "Appel iphone 14 pro,Ltop Super REtina xdr oled 6.1",
      price: 1200,
      cate: "Smartphones",
    },
    {
      src: Product1,
      name: "Appel iphone 14 pro,Ltop Super REtina xdr oled 6.1",
      price: 1200,
      cate: "Smartphones",
    },
    {
      src: Product1,
      name: "Appel iphone 14 pro,Ltop Super REtina xdr oled 6.1",
      price: 1200,
      cate: "Smartphones",
    },
    {
      src: Product1,
      name: "Appel iphone 14 pro,Ltop Super REtina xdr oled 6.1",
      price: 1200,
      cate: "Smartphones",
    },
    {
      src: Product1,
      name: "Appel iphone 14 pro,Ltop Super REtina xdr oled 6.1",
      price: 1200,
      cate: "Smartphones",
    },
  ];
  return (
    <div className="container pb-10 mx-auto">
      <SlidesProducts />
    </div>
  );
};

export default FeaturedProducts;
