import React, { useRef, useState, useEffect, MouseEvent } from "react";
import Head from "next/head";
import ShopUpperbar from "../../components/shopComponents/ShopUpperbar";
import ProductCard from "../../components/shopComponents/ProductCard";
import {
  getRunningQueriesThunk,
  shoperzApi,
  useAddToCartMutation,
  useGetAllProductsQuery,
} from "@/services/shoperzApi.service";
import Product from "@/components/Product";
import clsx from "clsx";
import LoadingProducts from "../../components/shopComponents/LoadingProducts";
import ButtonFilter from "../../components/shopComponents/ButtonFilter";
import FiltersSidebar from "../../components/shopComponents/FiltersSidebar";
import { Pagination } from "flowbite-react";
import { toast } from "react-toastify";
import { selectAppState } from "@/redux/slices/app.slice";
import { useSelector } from "react-redux";
import { wrapper } from "@/redux/store";
import { isInCartMiddleware } from "@/utils/isInCartMiddleware";
import { useRouter } from "next/router";
import useGetToken from "@/hooks/useGetToken";

type Props = {};

const Shop = (props: Props) => {
  const { isLoggedIn, shoppingCart } = useSelector(selectAppState);
  const { token } = useGetToken();
  const { query } = useRouter();
  const [fetchAddToCart, addToCartResponse] = useAddToCartMutation();
  const filterRef = useRef<HTMLElement | undefined>(undefined);
  const [productsLimitSelect, setProductsLimitSelect] = useState(20);
  const [sortMethod, setSortMethod] = useState<sortMethods>("-createdAt");
  const [productsView, setProductsView] = useState<"list" | "grid">("list");

  const { isProductsError, isLoadingProducts, products, isSuccessProducts } =
    useGetAllProductsQuery(
      {
        limit: productsLimitSelect,
        sortQueries: sortMethod,
      },
      {
        pollingInterval: 3000,
        selectFromResult: ({ data, isSuccess, isError, isLoading }) => {
          if (isSuccess) {
            return {
              products: {
                products: isInCartMiddleware(data?.data.products, shoppingCart),
                paginition: data?.data.paginition,
              },
              isSuccessProducts: isSuccess,
              isProductsError: isError,
              isLoadingProducts: isLoading,
            };
          } else {
            return {
              data: {
                products: undefined,
                paginition: undefined,
              },
              isSuccessProducts: isSuccess,
              isProductsError: isError,
              isLoadingProducts: isLoading,
            };
          }
        },
      }
    );

  const handleShowFilterbar = () => {
    filterRef.current?.classList.toggle("filter-sidebar-show");
    document.body.classList.toggle("prevent-scroll");
  };
  const handleApplyFilter = () => {
    console.log("apply filter");
  };
  const handleSortProducts = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const sortSelectedMethod = event.target.value as sortMethods;
      setSortMethod(sortSelectedMethod);
    },
    []
  );
  const handleSelectProductsLimit = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const productsLimit = +event.target.value;
      setProductsLimitSelect(productsLimit);
    },
    []
  );

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
  const handleChangeProductsView = (event: MouseEvent) => {
    const target = event.target as HTMLButtonElement;
    setProductsView(target.dataset.view as "list" | "grid");
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
            onChangeProductsView={handleChangeProductsView}
            currentProductView={productsView}
            title={"tv & audio"}
            count={products?.paginition?.length || 0}
            fromCount={products?.paginition?.actualProductsLength || 0}
            productsLimitSelect={productsLimitSelect}
            sortMethod={sortMethod}
            onSortSelect={(ev: React.ChangeEvent<HTMLSelectElement>) =>
              handleSortProducts(ev)
            }
            onSelectProductsLimit={(ev: React.ChangeEvent<HTMLSelectElement>) =>
              handleSelectProductsLimit(ev)
            }
          />
          {/* "grid gap-4 pb-12 pt-6 ", {
              "grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1":
                productsView === "grid",
            } */}
          <ul
            className={clsx(
              "products-viewAs-list",
              productsView === "grid" && "products-viewAs-grid"
            )}
          >
            {isProductsError && <div>error</div>}
            {isLoadingProducts ? (
              <LoadingProducts />
            ) : products?.products?.length ? (
              products?.products?.map((product) =>
                productsView === "list" ? (
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
          </ul>
        </section>
        <ButtonFilter
          onClick={function (event: MouseEvent<HTMLButtonElement>): void {
            throw new Error("Function not implemented.");
          }}
        />
        {/* <Filters /> */}
      </main>
    </>
  );
};

export default Shop;

export const getStaticProps = wrapper.getStaticProps(
  ({ dispatch, getState }) =>
    async (context) => {
      dispatch(shoperzApi.endpoints.getAllProducts.initiate({ limit: 20 }));
      await Promise.all(dispatch(getRunningQueriesThunk()));

      return {
        props: {},
      };
    }
);
