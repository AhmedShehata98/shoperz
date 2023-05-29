import React from "react";
import SideMenu from "./components/SideMenu";
import Head from "next/head";
import ShopUpperbar from "./components/ShopUpperbar";
import ProductCard from "./components/ProductCard";
import { useGetAllproductsQuery } from "@/services/shoperzApi.service";

type Props = {};

const Shop = (props: Props) => {
  const {
    isError: isProductsError,
    isLoading: isLoadingProducts,
    data: products,
    isSuccess: isSuccessProducts,
  } = useGetAllproductsQuery();
  console.log(products);
  return (
    <>
      <Head>
        <title> Shop </title>
      </Head>
      <main className="w-full min-h-screen flex items-start justify-between gap-3 container max-w-5xl mx-auto">
        <SideMenu />
        <section className="w-3/4 flex flex-col mt-6">
          <ShopUpperbar title={"tv & audio"} count={26} fromCount={100} />
          <ul>
            {products?.error === null && products.data.products?.length
              ? products.data.products.map((product) => (
                  <ProductCard key={product._id} {...product} />
                ))
              : null}
          </ul>
        </section>
      </main>
    </>
  );
};

export default Shop;
