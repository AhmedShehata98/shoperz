import React, { useRef, useState, MouseEvent } from "react";
import Head from "next/head";
import ShopUpperbar from "../../components/shopComponents/ShopUpperbar";
import ProductCard from "../../components/shopComponents/ProductCard";
import {
  getRunningQueriesThunk,
  shoperzApi,
  useAddToCartMutation,
  useGetAllProductsQuery,
} from "@/services/shoperzApi.service";
import clsx from "clsx";
import LoadingProducts from "../../components/shopComponents/LoadingProducts";
import ButtonFilter from "../../components/shopComponents/ButtonFilter";
import FiltersSidebar from "../../components/shopComponents/FiltersSidebar";
import { toast } from "react-toastify";
import { selectAppState } from "@/redux/slices/app.slice";
import { useSelector } from "react-redux";
import { wrapper } from "@/redux/store";
import { isInCartMiddleware } from "@/utils/isInCartMiddleware";
import { useRouter } from "next/router";
import useGetToken from "@/hooks/useGetToken";
import PagginitionButtons from "@/components/shopComponents/PagginitionButtons";
import dynamic from "next/dynamic";
import QuickLoadingModul from "@/layout/QuickLoadingModul";
import ErrorHappened from "@/components/ErrorHappened";

const ProductCardGrid = dynamic(() => import("@/components/ProductCardGrid"), {
  loading: () => <QuickLoadingModul />,
});

type Props = {};

const Shop = (props: Props) => {
  const { isLoggedIn, shoppingCart } = useSelector(selectAppState);
  const { token } = useGetToken();
  const { query } = useRouter();
  const [fetchAddToCart, addToCartResponse] = useAddToCartMutation();
  const filterRef = useRef<HTMLElement | undefined>(undefined);
  const [productsLimitSelect, setProductsLimitSelect] = useState(20);
  const [page, setPage] = useState(1);
  const [sortMethod, setSortMethod] = useState<sortMethods>("-createdAt");
  const [productsView, setProductsView] = useState<"list" | "grid">("list");

  const { isProductsError, isLoadingProducts, products, isSuccessProducts } =
    useGetAllProductsQuery(
      {
        limit: productsLimitSelect,
        sortQueries: sortMethod,
        page,
      },
      {
        refetchOnFocus: true,
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
  const handleChangePage = (event: MouseEvent) => {
    const target = event.target as HTMLLIElement | HTMLButtonElement;
    if (target.dataset.button === "prev") {
      setPage((page) => page - 1);
    } else if (target.dataset.button === "next") {
      setPage((page) => page + 1);
    } else {
      setPage(+target.dataset.pagenumber!);
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
          <ul
            className={clsx(
              "products-viewAs-list",
              productsView === "grid" && "products-viewAs-grid"
            )}
          >
            {isProductsError && (
              <ErrorHappened
                errorMsg={"Ooops , maybe server down or network issue"}
              />
            )}
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
                  <ProductCardGrid
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
          <PagginitionButtons
            actualProductsLength={
              products?.paginition.actualProductsLength || 0
            }
            remainingPages={products?.paginition.remainingPages || 0}
            currentPage={+products?.paginition?.currentPage! || page}
            onChangePage={(event) => handleChangePage(event)}
          />
        </section>
        <ButtonFilter onClick={() => handleShowFilterbar()} />
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
