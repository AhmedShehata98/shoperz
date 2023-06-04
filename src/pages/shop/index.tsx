import React, { useRef, useState } from "react";
import SideMenu from "./components/SideMenu";
import Head from "next/head";
import ShopUpperbar from "./components/ShopUpperbar";
import ProductCard from "./components/ProductCard";
import { useGetAllproductsQuery } from "@/services/shoperzApi.service";
import Product from "@/components/Product";
import clsx from "clsx";
import LoadingProducts from "./components/LoadingProducts";
import ButtonFilter from "./components/ButtonFilter";
import Filters from "./components/Filters";
import { Pagination } from "flowbite-react";

type Props = {};

const Shop = (props: Props) => {
  const {
    isError: isProductsError,
    isLoading: isLoadingProducts,
    data: products,
    isSuccess: isSuccessProducts,
  } = useGetAllproductsQuery();
  const [showProducts, setShowProducts] = useState(true);
  const showFilters = useRef(null);
  function t(page: number): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <Head>
        <title> Shop </title>
      </Head>
      <main className="w-full min-h-screen flex items-start justify-between gap-3 container max-w-5xl mx-auto">
        <SideMenu />
        <section className="w-3/4 flex flex-col mt-6 max-lg:w-full max-lg:px-2">
          <ShopUpperbar
            setShowProducts={setShowProducts}
            title={"tv & audio"}
            count={20}
            fromCount={10929}
          />
          <ul
            className={clsx("grid gap-4 pb-12 pt-6 ", {
              "grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1":
                showProducts !== true,
            })}
          >
            {isLoadingProducts ? (
              <LoadingProducts />
            ) : products?.error === null && products.data.products?.length ? (
              products.data.products.map((prod) =>
                showProducts ? (
                  <ProductCard key={prod._id} {...prod} />
                ) : (
                  <Product key={prod._id} {...prod} />
                )
              )
            ) : null}
            <div className="flex items-center justify-center text-center">
              {/* <Pagination
                currentPage={1}
                layout="table"
                onPageChange={t}
                totalPages={1000}
              /> */}
            </div>
          </ul>
        </section>
        <ButtonFilter />
        <Filters />
      </main>
    </>
  );
};

export default Shop;
