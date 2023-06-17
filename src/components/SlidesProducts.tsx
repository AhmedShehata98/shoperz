import React, { useState } from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import Product from "./Product";
import Headtitle from "./Headtitle";
import LoadingProducts from "@/components/shopComponents/LoadingProducts";
import { useGetAllProductsQuery } from "@/services/shoperzApi.service";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type Props = {};

const SlidesProducts = (props: Props) => {
  const {
    isError: isProductsError,
    isLoading: isLoadingProducts,
    data: products,
    isSuccess: isSuccessProducts,
    error,
    status,
  } = useGetAllProductsQuery({ limit: 12 });
  interface arrows {
    right: Boolean;
    left: Boolean;
  }
  const swipper = useSwiper();
  const [isEndOfList, setIsEndOfList] = useState(false);
  const [isStartOfList, setIsStartOfList] = useState(true);

  return (
    <div className="container max-w-5xl pb-10 mx-auto">
      <div className="flex justify-between items-center py-6">
        <Headtitle title="Featured Products" />
        <div className="flex gap-x-3">
          <BackButton isStartOfList={isStartOfList} />
          <NextButton isEndOfList={isEndOfList} />
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
        onReachBeginning={(ev) => {
          setIsStartOfList(ev.isBeginning);
          setIsEndOfList(ev.isEnd);
        }}
        onReachEnd={(ev) => {
          setIsStartOfList(ev.isBeginning);
          setIsEndOfList(ev.isEnd);
        }}
        onRealIndexChange={(ev) => {
          setIsStartOfList(ev.isBeginning);
          setIsEndOfList(ev.isEnd);
        }}
        className="!pb-4 pt-1"
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
        {isProductsError && (
          <div className="grid">
            {status}
            {JSON.stringify(error)}
          </div>
        )}
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

type BackButtonProps = {
  isStartOfList: boolean;
};
function BackButton({ isStartOfList }: BackButtonProps) {
  return (
    <button
      className={`swiper-prev ${isStartOfList ? "!bg-white" : "bg-Grey-200"}`}
    >
      <IoIosArrowBack
        className={`pointer-events-none ${
          isStartOfList ? "opacity-40" : "opacity-100"
        }`}
      />
    </button>
  );
}

type NextButtonProps = {
  isEndOfList: boolean;
};
function NextButton({ isEndOfList }: NextButtonProps) {
  return (
    <button
      className={`swiper-next ${isEndOfList ? "!bg-white" : "bg-Grey-200"}`}
    >
      <IoIosArrowForward
        className={`pointer-events-none ${
          isEndOfList ? "opacity-40" : "opacity-100"
        }`}
      />
    </button>
  );
}
