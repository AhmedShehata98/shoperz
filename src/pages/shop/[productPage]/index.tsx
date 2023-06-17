import Breadcrumb from "@/components/Breadcrumb";
import React, { useState } from "react";
import ProductMedia from "./components/ProductMedia";
import ProductDescribtion from "./components/ProductDescribtion";
import ProductSalary from "./components/ProductSalary";
import Bundles from "./components/Bundles";
import Head from "next/head";
import { IoIosArrowDown } from "react-icons/io";
import InformationData from "./components/InformationData";
import TopRatedProducts from "./components/TopRatedProducts";
import BestSellerProducts from "./components/BestSellerProducts";
import MegaOffersProducts from "./components/MegaOffersProducts";
import CustomHeading from "./components/CustomHeading";
import { wrapper } from "@/redux/store";
import { GetStaticPaths } from "next";
import { API_BASE_URL, ENDPOINTS } from "@/services/api/shoppers.api";

const ProductPage = () => {
  return (
    <>
      <Head>
        <title>Products Details</title>
      </Head>
      <main>
        <div className="container max-w-5xl mx-auto">
          <Breadcrumb />
        </div>
        <section className="container px-3 max-w-5xl mx-auto">
          <div className="w-full flex items-start justify-between gap-6 lg:gap-4 flex-wrap">
            <ProductMedia />
            <ProductDescribtion />
            <ProductSalary />
          </div>
        </section>
        <section className="bg-gray-200 py-3 mb-4">
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
        </section>
        <InformationData />
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
