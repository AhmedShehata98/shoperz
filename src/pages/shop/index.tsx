import React, { useRef, useState, useEffect, MouseEvent } from "react";
import Head from "next/head";
import ShopUpperbar from "./components/ShopUpperbar";
import ProductCard from "./components/ProductCard";
import {
  useAddToCartMutation,
  useGetAllProductsQuery,
} from "@/services/shoperzApi.service";
import Product from "@/components/Product";
import clsx from "clsx";
import LoadingProducts from "./components/LoadingProducts";
import ButtonFilter from "./components/ButtonFilter";
import FiltersSidebar from "./components/FiltersSidebar";
import { Pagination } from "flowbite-react";
import { toast } from "react-toastify";
import { selectAppState } from "@/redux/slices/app.slice";
import { useSelector } from "react-redux";

type Props = {};

const Shop = (props: Props) => {
  const { isLoggedIn } = useSelector(selectAppState);
  const [token, setToken] = useState<string | undefined>(undefined);
  const [fetchAddToCart, addToCartResponse] = useAddToCartMutation();
  const filterRef = useRef<HTMLElement | undefined>(undefined);

  const {
    isError: isProductsError,
    isLoading: isLoadingProducts,
    data: products,
    isSuccess: isSuccessProducts,
  } = useGetAllProductsQuery();
  const handleShowFilterbar = () => {
    filterRef.current?.classList.toggle("filter-sidebar-show");
    document.body.classList.toggle("prevent-scroll");
  };
  const handleApplyFilter = () => {
    console.log("apply filter");
  };
  const [showProducts, setShowProducts] = useState(true);
  function handleSwitchVisibality(btn: HTMLButtonElement): void {
    btn.disabled = true;
    btn.firstElementChild?.classList.replace("flex", "hidden");
    btn.lastElementChild?.classList.replace("hidden", "flex");
  }
  const handleAddToCart = (
    event: MouseEvent<HTMLButtonElement>,
    productId: string,
    quantity: number
  ) => {
    const target = event.target as HTMLButtonElement;
    const btn = target.closest("button") as HTMLButtonElement;
    if (isLoggedIn) {
      // handle switch btw "added to cart" or "add to cart" icons and pragraph
      handleSwitchVisibality(btn);
      fetchAddToCart({ productId, quantity, token: token! });
    } else {
      toast.warning(
        "You are not registered! ,ARegister first and start your shoping journy"
      );
    }
  };

  // get token from cookie and set token state
  // this is important to get cart items
  useEffect(() => {
    const token = document.cookie.split("=")[1];
    if (token) {
      setToken(token);
    } else {
      setToken(undefined);
    }
  }, []);

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
                    onAddToCart={(ev: MouseEvent<HTMLButtonElement>) =>
                      handleAddToCart(ev, product._id, 1)
                    }
                  />
                ) : (
                  <Product
                    key={product._id}
                    productData={product}
                    onAddToCart={(ev: MouseEvent<HTMLButtonElement>) =>
                      handleAddToCart(ev, product._id, 1)
                    }
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
