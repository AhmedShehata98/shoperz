import React, { useRef, useState, MouseEvent, useLayoutEffect } from "react";
import Head from "next/head";
import ShopUpperbar from "@/features/shop/components/ShopUpperbar";
import ProductCardColumn from "@/features/shop/components/ProductCardColumn";
import ButtonFilter from "@/features/shop/components/ButtonFilter";
import FiltersSidebar from "@/features/shop/components/FiltersSidebar";
import ProductsListWrapper from "@/features/shop/components/ProductsListWrapper";
import {
  getRunningQueriesThunk,
  shoperzApi,
  useAddToCartMutation,
  useGetAllProductsQuery,
} from "@/services/shoperzApi.service";
import { toast } from "react-toastify";
import { selectAppState } from "@/redux/slices/app.slice";
import { useSelector } from "react-redux";
import { wrapper } from "@/redux/store";
import useGetToken from "@/hooks/useGetToken";
import dynamic from "next/dynamic";
import QuickLoadingModul from "@/layout/QuickLoadingModul";
import useResize from "@/hooks/useResize";
import { useRouter } from "next/router";
import PagginitionWrapper from "@/components/pagginitionButtons/PagginitionWrapper";
import PagginitionBtn from "@/components/pagginitionButtons/PagginitionBtn";

const ProductCardGrid = dynamic(() => import("@/components/ProductCardGrid"), {
  loading: () => <QuickLoadingModul />,
});

type Props = {};

const Shop = (props: Props) => {
  const { isLoggedIn } = useSelector(selectAppState);
  const { screenWidth } = useResize();
  const { pathname, query, push } = useRouter();
  const { token } = useGetToken();
  const [fetchAddToCart, addToCartResponse] = useAddToCartMutation();
  const filterRef = useRef<HTMLElement | undefined>(undefined);
  const [productsLimitSelect, setProductsLimitSelect] = useState(20);
  const [page, setPage] = useState(1);
  const [sortMethod, setSortMethod] = useState<sortMethods>("-createdAt");
  const [productsView, setProductsView] = useState<"list" | "grid">(
    screenWidth <= 768 ? "grid" : "list"
  );

  const handleFilterQuery = () => {
    if (Object.entries(query).length >= 1) {
      return JSON.parse(JSON.stringify(query));
    } else {
      undefined;
    }
  };

  const {
    isError: isProductsError,
    isLoading: isLoadingProducts,
    data: products,
    isSuccess: isSuccessProducts,
  } = useGetAllProductsQuery(
    {
      limit: productsLimitSelect,
      page,
      parts: "pagination,filter",
      filters: handleFilterQuery(),
    },
    {
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
    }
  );

  const handleShowFilterbar = () => {
    filterRef.current?.classList.toggle("filter-sidebar-show");
    document.body.classList.toggle("prevent-scroll");
  };
  const handleSortProducts = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedSortMethod = event.target.value as sortMethods;
      const searchParams = new URLSearchParams();
      searchParams.append("sort", selectedSortMethod);
      push({ pathname, search: searchParams.toString() });
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
      toast.warning("You are not registered! .");
    }
  };
  const handleChangeProductsView = (event: MouseEvent) => {
    const target = event.target as HTMLButtonElement;
    setProductsView(target.dataset.view as "list" | "grid");
  };
  const handleChangePage = (event: MouseEvent) => {
    const target = event.target as HTMLLIElement | HTMLButtonElement;
    const pageNo = target.dataset.pageno;
    if (pageNo) {
      setPage(parseInt(pageNo));
    }
  };

  useLayoutEffect(() => {
    if (screenWidth <= 768) {
      setProductsView("grid");
    } else {
      setProductsView("list");
    }
  }, [screenWidth]);

  return (
    <>
      <Head>
        <title> Shop </title>
      </Head>
      <main className="w-full min-h-screen flex items-start justify-between gap-3 container max-w-5xl mx-auto">
        <FiltersSidebar ref={filterRef} handleClose={handleShowFilterbar} />
        <section className="w-3/4 flex flex-col mt-6 max-lg:w-full max-lg:px-2">
          <ShopUpperbar
            onChangeProductsView={handleChangeProductsView}
            currentProductView={productsView}
            title={"tv & audio"}
            count={products?.data.pagination.length ?? 0}
            fromCount={products?.data.pagination.actualProductsLength ?? 0}
            productsLimitSelect={productsLimitSelect}
            sortMethod={sortMethod}
            onSortSelect={(ev: React.ChangeEvent<HTMLSelectElement>) =>
              handleSortProducts(ev)
            }
            onSelectProductsLimit={(ev: React.ChangeEvent<HTMLSelectElement>) =>
              handleSelectProductsLimit(ev)
            }
          />
          <ProductsListWrapper
            view={productsView}
            apiCallState={{
              isError: isProductsError,
              isLoading: isLoadingProducts,
            }}
            productsLength={products?.data.products?.length}
          >
            {products?.data.products?.map((product) =>
              productsView === "list" ? (
                <ProductCardColumn
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
            )}
          </ProductsListWrapper>
          <PagginitionWrapper
            onClickPrevBtn={() => setPage((p) => (p -= 1))}
            onClickNextBtn={() => setPage((p) => (p += 1))}
            actualProductsLength={
              products?.data.pagination.actualProductsLength ?? 0
            }
            remainingPages={products?.data.pagination.remainingPages ?? 0}
            currentPage={page}
          >
            <PagginitionBtn onChangePageNo={handleChangePage} />
          </PagginitionWrapper>
        </section>
        <ButtonFilter onClick={() => handleShowFilterbar()} />
      </main>
    </>
  );
};

export default Shop;

export const getStaticProps = wrapper.getStaticProps(
  ({ dispatch }) =>
    async (context) => {
      const { data: productsResponse } = await dispatch(
        shoperzApi.endpoints.getAllProducts.initiate({
          limit: 20,
          parts: "pagination,filter",
        })
      );
      await Promise.all(dispatch(getRunningQueriesThunk()));

      return {
        props: {
          products: productsResponse?.data.products,
          pagination: productsResponse?.data.pagination,
        },
      };
    }
);
