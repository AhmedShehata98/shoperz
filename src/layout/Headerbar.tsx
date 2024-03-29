import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAppState,
  setIsLoggedIn,
  setShowCartDrawer,
  setToggleActionMenu,
} from "@/redux/slices/app.slice";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import QuickLoadingModul from "./QuickLoadingModul";
import { useGetAllProductsQuery } from "@/services/shoperzApi.service";
import { useDebounce } from "use-debounce";
import CartDrawer from "@/layout/CartDrawer";
import HeaderControlsActions from "@/features/header/components/HeaderControlsActions";
import SearchResultList from "@/features/header/components/SearchResultList";
import useGetToken from "@/hooks/useGetToken";

const MobileSearchbar = dynamic(
  () => import("@/features/header/components/MobileSearchbar"),
  {
    loading: () => <QuickLoadingModul />,
  }
);
const HeaderUpperbar = dynamic(
  () => import("@/features/header/components/HeaderUpperbar"),
  { loading: () => <QuickLoadingModul /> }
);
const ActionMenu = dynamic(() => import("@/layout/ActionMenu"), {
  loading: () => <QuickLoadingModul />,
});
const HeaderCategorybar = dynamic(
  () => import("@/features/header/components/HeaderCategorybar"),
  {
    loading: () => <QuickLoadingModul />,
  }
);

const Headerbar = () => {
  const { showCartDrawer, showActionMenu } = useSelector(selectAppState);
  const dispatch = useDispatch();
  const { token } = useGetToken();
  const headerbarRef = useRef<HTMLDivElement | null>(null);
  const [searchQuery, setSearchQuery] = useState<undefined | string>(undefined);
  const [debounceSearchQuery] = useDebounce(searchQuery, 400);
  const [showSearchResult, setShowSearchResult] = useState(false);

  const {
    data: searchResult,
    isLoading: searchLoading,
    isError: SearchError,
  } = useGetAllProductsQuery(
    { limit: 8, q: debounceSearchQuery, parts: "filter" },
    { skip: !Boolean(searchQuery) }
  );

  const handleToggleCartDrower = (isToggled: boolean) => {
    dispatch(setToggleActionMenu(isToggled));
  };

  React.useEffect(() => {
    const handleCloseSearchResult = (ev: MouseEvent) => {
      if (
        (ev.target as HTMLElement)?.id !== "search-products-wrapper" &&
        (ev.target as HTMLElement)?.id !== "search-products-field"
      ) {
        setShowSearchResult(false);
      } else {
        setShowSearchResult(true);
      }
    };
    window.document.addEventListener("click", handleCloseSearchResult);
    return () => {
      window.document.removeEventListener("click", handleCloseSearchResult);
    };
  }, []);

  React.useEffect(() => {
    if (debounceSearchQuery?.length! >= 3) {
      setShowSearchResult(true);
    } else {
      setShowSearchResult(false);
    }
  }, [debounceSearchQuery]);

  React.useEffect(() => {
    if (token) {
      dispatch(setIsLoggedIn(true));
    }
  }, [token]);

  const setSearchQueryCallback = React.useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  return (
    <header
      ref={headerbarRef}
      className="relative flex flex-col w-full h-fit bg-white"
    >
      <AnimatePresence mode="wait">
        {showCartDrawer ? <CartDrawer /> : null}
        {showActionMenu ? <ActionMenu /> : null}
      </AnimatePresence>
      <section className="container max-w-5xl mx-auto flex flex-col justify-between items-center gap-3">
        <HeaderUpperbar />
        <HeaderControlsActions
          setSearchQuery={setSearchQueryCallback}
          searchQuery={searchQuery}
        />
      </section>
      <div className="max-lg:hidden">
        <HeaderCategorybar />
      </div>
      <MobileSearchbar
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      />
      <AnimatePresence mode="wait">
        {showSearchResult && (
          <SearchResultList
            searchResult={searchResult?.data.products}
            query={debounceSearchQuery}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Headerbar;
