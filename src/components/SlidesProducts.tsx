import React, { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsArrowLeftCircleFill,
} from "react-icons/bs";

import Product1 from "../assets/products/Product.png";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import Product from "./Product";
import Headtitle from "./Headtitle";
import LoadingProducts from "@/pages/shop/components/LoadingProducts";
import { useGetAllProductsQuery } from "@/services/shoperzApi.service";

type Props = {};

const SlidesProducts = (props: Props) => {
  const {
    isError: isProductsError,
    isLoading: isLoadingProducts,
    data: products,
    isSuccess: isSuccessProducts,
    error,
  } = useGetAllProductsQuery();
  interface arrows {
    right: Boolean;
    left: Boolean;
  }
  const [arrows, setArrows] = useState({ right: false, left: false });
  console.log(error);

  return (
    <div className="container pb-10 mx-auto">
      <div className="flex justify-between items-center py-6">
        <Headtitle title="Featured Products" />
        <div className="flex gap-x-10">
          <button className="swiper-prev">
            <svg
              width="15"
              height="20"
              viewBox="0 0 11 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${arrows.left && "opacity-40"}`}
            >
              <path
                d="M9.74313 1.22269C9.35263 0.832193 8.71976 0.831847 8.32891 1.22269L1.25785 8.29376C0.867004 8.6846 0.867349 9.31747 1.25785 9.70797L8.32891 16.779C8.5826 17.0327 8.93909 17.1213 9.26545 17.0444C9.4405 17.004 9.6064 16.9158 9.74313 16.779C10.134 16.3882 10.1336 15.7553 9.74313 15.3648L3.37917 9.00086L9.74313 2.6369C10.134 2.24606 10.1336 1.61319 9.74313 1.22269Z"
                fill="#586A84"
              />
            </svg>
          </button>
          <button className="swiper-next">
            <svg
              width="15"
              height="20"
              viewBox="0 0 11 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${arrows.right && "opacity-40"}`}
            >
              <path
                d="M1.25785 16.7782C1.64834 17.1687 2.28122 17.169 2.67206 16.7782L9.74313 9.70712C10.134 9.31628 10.1336 8.6834 9.74313 8.29291L2.67206 1.22184C2.41837 0.968154 2.06189 0.879593 1.73552 0.956501C1.56047 0.996898 1.39457 1.08511 1.25785 1.22184C0.867004 1.61268 0.867349 2.24556 1.25785 2.63605L7.62181 9.00001L1.25785 15.364C0.867004 15.7548 0.867349 16.3877 1.25785 16.7782Z"
                fill="#586A84"
              />
            </svg>
          </button>
        </div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={5}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        onReachEnd={() => setArrows({ right: true, left: false })}
        onRealIndexChange={() => setArrows({ right: false, left: true })}
        className="!py-4"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        }}
      >
        {isProductsError && <div>error</div>}
        {isLoadingProducts ? (
          <LoadingProducts />
        ) : (
          products?.data.products.map(
            (el: any, i: number) =>
              i < 10 && (
                <SwiperSlide key={i}>
                  <Product
                    productData={el}
                    onAddToCart={function (
                      event: React.MouseEvent<Element, MouseEvent>
                    ): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                </SwiperSlide>
              )
          )
        )}
      </Swiper>
    </div>
  );
};

export default SlidesProducts;
