import Breadcrumb from "@/components/Breadcrumb";
import React, { useState } from "react";
import Head from "next/head";
import ProductMedia from "./components/ProductMedia";
import ProductDescribtion from "./components/ProductDescribtion";
import ProductSalary from "./components/ProductSalary";
import Bundles from "./components/Bundles";
import InformationData from "./components/InformationData";
import TopRatedProducts from "./components/TopRatedProducts";
import BestSellerProducts from "./components/BestSellerProducts";
import MegaOffersProducts from "./components/MegaOffersProducts";
import CustomHeading from "./components/CustomHeading";
import { IoIosArrowDown } from "react-icons/io";
import { wrapper } from "@/redux/store";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { API_BASE_URL, ENDPOINTS } from "@/services/api/shoppers.api";
import axios from "axios";
import {
  getRunningQueriesThunk,
  shoperzApi,
} from "@/services/shoperzApi.service";
import useInShoppingCart from "@/hooks/useInShoppingCart";

type Props = {
  product: Products;
  isLoading: boolean;
  isError: boolean;
};

const ProductPage: NextPage<Props> = ({ product }) => {
  const { isInCart } = useInShoppingCart(product._id);

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <main>
        <div className="container max-w-5xl mx-auto">
          <Breadcrumb name={product.name} />
        </div>
        <section className="container px-3 max-w-5xl mx-auto">
          <div className="w-full flex items-start justify-between gap-6 lg:gap-4 flex-wrap">
            <ProductMedia
              thumbnail={product.thumbnail}
              images={product.images}
            />
            <ProductDescribtion
              description={product.description}
              category={product.category_id?.name}
              colors={product.colors}
              name={product.name}
              sku={product.sku}
            />
            <ProductSalary
              product_id={product._id}
              isInCart={isInCart}
              price={product.price || 0}
              stock={product.stock}
              deliveryCost={product.deliveryCost || 0}
            />
          </div>
        </section>
        {/* <section className="bg-gray-200 py-3 mb-4">
          <div className="container max-w-5xl mx-auto px-3 lg:px-0">
            <CustomHeading title="bundles" counts="4" />
            <Bundles />
            <div className="w-full bg-gray-50 px-4 pt-2 pb-3">
              <button className="w-full md:w-1/2 lg:w-max flex items-center justify-center gap-2 bg-gray-200 px-3 py-2 rounded-md hover:bg-gray-100 underline divide-t">
                <p className="capitalize text-gray-600 font-medium m-0">
                  show more
                </p>
                <IoIosArrowDown />
              </button>
            </div>
          </div>
        </section> */}
        <InformationData
          description={
            product.description || "there's no description for this product"
          }
          specifications={
            product.specifications ||
            "there's no Specifications for this product"
          }
        />
        <section className="bg-gray-200 py-6 px-2">
          <article className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-between gap-2 ">
            <TopRatedProducts />
            <BestSellerProducts />
            <MegaOffersProducts />
          </article>
        </section>
      </main>
    </>
  );
};

export default ProductPage;
export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  ({ dispatch }) =>
    async (context) => {
      const id = context.params?.id as string;

      dispatch(shoperzApi.endpoints.getProductById.initiate(id));
      return Promise.all(dispatch(getRunningQueriesThunk())).then(([res]) => {
        const product = res.data as ProductByIdResponse;
        return {
          props: {
            product: product.data.product,
            isLoading: res.isLoading,
            isError: res.isError,
          },
        };
      });
    }
);
export const getStaticPaths: GetStaticPaths = async (context) => {
  const res = await axios({
    baseURL: API_BASE_URL,
    method: "GET",
    url: ENDPOINTS.products.products,
  });
  const data: ProductsResponse = await res.data;
  const paths = data.data.products.map((product) => ({
    params: { id: product._id, name: product.name },
  }));

  return {
    paths,
    fallback: false,
  };
};
