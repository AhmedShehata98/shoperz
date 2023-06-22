import React from "react";
import ColumnProduct from "./ColumnProduct";
import {
  shoperzApi,
  useGetMegaOfferProductsQuery,
  useGetTopRatedProductsQuery,
} from "@/services/shoperzApi.service";
import Headtitle from "./Headtitle";
import { useInView } from "react-intersection-observer";
import { wrapper } from "@/redux/store";
import { useSelector } from "react-redux";
import { selectAppState } from "@/redux/slices/app.slice";
import { isInCartMiddleware } from "@/utils/isInCartMiddleware";
import ErrorHappened from "./ErrorHappened";

type Props = {};

const ProductLists = (props: Props) => {
  const { ref, inView, entry } = useInView();
  const { shoppingCart } = useSelector(selectAppState);
  console.log(props);
  const {
    data: topRatedProducts,
    isLoading: loadingTopRatedProducts,
    isSuccess: successTopRatedProducts,
    isError: isTopRatedProductsError,
  } = useGetTopRatedProductsQuery(
    { limit: 5 },
    {
      skip: !inView ? true : false,
      selectFromResult: ({ data, isSuccess, isError, isLoading }) => {
        if (isSuccess) {
          return {
            data: {
              products: isInCartMiddleware(data?.data.products, shoppingCart),
            },
            isError,
            isLoading,
            isSuccess,
          };
        }

        return {
          data: {
            products: undefined,
            paginition: undefined,
          },
          isError,
          isLoading,
          isSuccess,
        };
      },
    }
  ); // if this section is not in view dont fetch data
  const {
    data: megaOfferProducts,
    isLoading: loadingMegaOfferProducts,
    isSuccess: successMegaOfferProducts,
    isError: isMegaOfferProductsError,
  } = useGetMegaOfferProductsQuery(
    { limit: 5 },
    {
      skip: !inView ? true : false,
      selectFromResult: ({ data, isSuccess, isError, isLoading }) => {
        if (isSuccess) {
          return {
            data: {
              products: isInCartMiddleware(data?.data.products, shoppingCart),
            },
            isError,
            isLoading,
            isSuccess,
          };
        }

        return {
          data: {
            products: undefined,
            paginition: undefined,
          },
          isError,
          isLoading,
          isSuccess,
        };
      },
    }
  ); // if this section is not in view dont fetch data

  // View Elements
  if (isTopRatedProductsError || isMegaOfferProductsError) {
    return (
      <ErrorHappened errorMsg={"Ooops , maybe server down or network issue"} />
    );
  } else {
    return (
      <div ref={ref} className="bg-gray-100 px-4">
        <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-start gap-4">
          <ul className="grid grid-flow-row my-6">
            <Headtitle title={"Top Rated"} />
            {loadingTopRatedProducts
              ? [...Array(5).keys()].map((__, idx) => (
                  <ColumnProductSkeleton key={idx} />
                ))
              : null}

            {!loadingTopRatedProducts && successTopRatedProducts
              ? topRatedProducts?.products?.map((product) => (
                  <ColumnProduct key={product._id} product={product} />
                ))
              : null}
          </ul>
          <ul className="grid grid-flow-row my-6">
            <Headtitle title={"Best sellers"} />
            {loadingTopRatedProducts
              ? [...Array(5).keys()].map((__, idx) => (
                  <ColumnProductSkeleton key={idx} />
                ))
              : null}
            {!loadingTopRatedProducts && successTopRatedProducts
              ? topRatedProducts?.products?.map((product) => (
                  <ColumnProduct key={product._id} product={product} />
                ))
              : null}
          </ul>
          <ul className="grid grid-flow-row my-6">
            <Headtitle title={"Mega Offers"} />
            {loadingMegaOfferProducts
              ? [...Array(5).keys()].map((__, idx) => (
                  <ColumnProductSkeleton key={idx} />
                ))
              : null}
            {!loadingMegaOfferProducts && successMegaOfferProducts
              ? megaOfferProducts?.products?.map((product) => (
                  <ColumnProduct key={product._id} product={product} />
                ))
              : null}
          </ul>
        </div>
      </div>
    );
  }
};

export default ProductLists;
function ColumnProductSkeleton() {
  return (
    <li className="flex items-center justify-between gap-3 p-3 bg-white border mb-3">
      <span className="block w-1/3 h-20 rounded bg-Grey-500 animate-pulse"></span>
      <ul className="block w-1/2 ">
        <li className="w-3/4 h-3 rounded-xl bg-Grey-200 mb-2 animate-pulse"></li>
        <li className="w-10/12 h-3 rounded-xl bg-Grey-200 mb-4 animate-pulse"></li>
        <li className="w-4/6 h-3 rounded-xl bg-Grey-400 mb-1 animate-pulse"></li>
      </ul>
      <span className="block w-9 h-9 bg-Grey-400 rounded-full self-end animate-pulse"></span>
    </li>
  );
}
