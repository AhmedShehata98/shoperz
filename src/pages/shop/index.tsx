import React, { useRef, useState } from "react";
import Head from "next/head";
import ShopUpperbar from "./components/ShopUpperbar";
import ProductCard from "./components/ProductCard";
import {
  useAddToCartMutation,
  useGetAllproductsQuery,
} from "@/services/shoperzApi.service";
import Product from "@/components/Product";
import clsx from "clsx";
import LoadingProducts from "./components/LoadingProducts";
import ButtonFilter from "./components/ButtonFilter";
import FiltersSidebar from "./components/FiltersSidebar";
import { Pagination } from "flowbite-react";
import { toast } from "react-toastify";

type Props = {};

const Shop = (props: Props) => {
  const [fetchAddToCart, addToCartResponse] = useAddToCartMutation();
  const filterRef = useRef<HTMLElement | undefined>(undefined);
  const {
    isError: isProductsError,
    isLoading: isLoadingProducts,
    data: products,
    isSuccess: isSuccessProducts,
  } = useGetAllproductsQuery();
  const handleShowFilterbar = () => {
    filterRef.current?.classList.toggle("filter-sidebar-show");
    document.body.classList.toggle("prevent-scroll");
  };
  const handleApplyFilter = () => {
    console.log("apply filter");
  };

  const [showProducts, setShowProducts] = useState(true);
  function t(page: number): void {
    throw new Error("Function not implemented.");
  }
  const handleAddToCart = (productId: string, quantity: number) => {
    const token = document.cookie.split("=")[1];
    if (token) {
      fetchAddToCart({ productId, quantity, token });
      toast.success("product is added to your cart success");
    } else {
      toast.warning(
        "You are not registered! ,Register first and start your shoping journy"
      );
    }
  };
  return (
    <>
      <Head>
        <title> Shop </title>
      </Head>
      <main className="w-full min-h-screen flex items-start justify-between gap-3 container max-w-5xl mx-auto">
        <FiltersSidebar
          ref={filterRef}
          handleClose={handleShowFilterbar}
          handleApply={handleApplyFilter}
        />
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
            {isProductsError && <div>error</div>}
            {isLoadingProducts ? (
              <LoadingProducts />
            ) : products?.error === null && products.data.products?.length ? (
              products.data.products.map((product) =>
                showProducts ? (
                  <ProductCard
                    key={product._id}
                    productData={product}
                    onAddToCart={() => handleAddToCart(product._id, 1)}
                  />
                ) : (
                  <Product
                    key={product._id}
                    productData={product}
                    onAddToCart={() => handleAddToCart(product._id, 1)}
                  />
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
        <ButtonFilter
          onClick={function (
            event: React.MouseEvent<Element, MouseEvent>
          ): void {
            throw new Error("Function not implemented.");
          }}
        />
        {/* <Filters /> */}
      </main>
    </>
  );
};

export default Shop;
