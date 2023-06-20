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

type Props = {};

const Shop = (props: Props) => {
  const { isLoggedIn, shoppingCart } = useSelector(selectAppState);
  const [token, setToken] = useState<string | undefined>(undefined);
  const [fetchAddToCart, addToCartResponse] = useAddToCartMutation();
  const filterRef = useRef<HTMLElement | undefined>(undefined);
  const [productsLimitSelect, setProductsLimitSelect] = useState(20);
  const [sortMethod, setSortMethod] = useState<sortMethods>("-createdAt");

  const {
    isError: isProductsError,
    isLoading: isLoadingProducts,
    data: products,
    isSuccess: isSuccessProducts,
  } = useGetAllProductsQuery({
    limit: productsLimitSelect,
    sortQueries: sortMethod,
  });

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
            count={products?.data.paginition.length || 0}
            fromCount={0}
            productsLimitSelect={productsLimitSelect}
            sortMethod={sortMethod}
            onSortSelect={(ev: React.ChangeEvent<HTMLSelectElement>) =>
              handleSortProducts(ev)
            }
            onSelectProductsLimit={(ev: React.ChangeEvent<HTMLSelectElement>) =>
              handleSelectProductsLimit(ev)
            }
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
              isInCartMiddleware(products.data.products, shoppingCart).map(
                (product) =>
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
