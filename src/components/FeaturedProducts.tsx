import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import Product from "./ProductCardGrid";
import Headtitle from "./Headtitle";
import {
  useAddToCartMutation,
  useGetAllProductsQuery,
} from "@/services/shoperzApi.service";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useGetToken from "@/hooks/useGetToken";
import { isInCartMiddleware } from "@/utils/isInCartMiddleware";
import { useSelector } from "react-redux";
import { selectAppState } from "@/redux/slices/app.slice";
import ErrorHappened from "./ErrorHappened";
import ProductCardSkeleton from "./ProductCardSkeleton";

type Props = {};

const FeaturedProducts = (props: Props) => {
  const { shoppingCart } = useSelector(selectAppState);
  const { token } = useGetToken();
  const {
    isError,
    error,
    isLoading,
    data: products,
  } = useGetAllProductsQuery(
    { limit: 12, sortQueries: "createdAt" },

    {
      selectFromResult: ({ data, isSuccess, isError, error, isLoading }) => {
        if (isSuccess) {
          return {
            data: {
              products: isInCartMiddleware(data?.data.products, shoppingCart),
              paginition: data?.data.paginition,
            },
            isError,
            error,
            isLoading,
          };
        }

        return {
          data: {
            products: undefined,
            paginition: undefined,
          },
          isError,
          error,
          isLoading,
        };
      },
    }
  );
  const [FetchaddToCart, addToCartResponse] = useAddToCartMutation();

  const [isEndOfList, setIsEndOfList] = useState(false);
  const [isStartOfList, setIsStartOfList] = useState(true);

  return (
    <div className="container max-w-5xl pb-10 mx-auto px-4">
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
            slidesPerView: 2,
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
        {isError && (
          <ErrorHappened
            errorMsg={"Ooops , maybe server down or network issue"}
          />
        )}
        {isLoading
          ? [...Array(12).keys()].map((__, idx) => (
              <SwiperSlide key={idx}>
                <ProductCardSkeleton dir={"grid"} />
              </SwiperSlide>
            ))
          : products?.products?.map((product) => (
              <SwiperSlide key={product._id}>
                <Product
                  productData={product}
                  onAddToCart={function (): void {
                    FetchaddToCart({
                      token,
                      productId: product._id,
                      quantity: 1,
                    });
                  }}
                />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProducts;

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
