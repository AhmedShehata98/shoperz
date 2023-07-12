import React, { useLayoutEffect, useRef, useState } from "react";
import CartDrawer from "./CartDrawer";
import HeaderControlsActions from "@/layout/components/HeaderControlsActions";
import { useSelector } from "react-redux";
import { selectAppState } from "@/redux/slices/app.slice";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import QuickLoadingModul from "./QuickLoadingModul";
import { BsSearch } from "react-icons/bs";
import MobileSearchbar from "./components/MobileSearchbar";
import SearchResultList from "./components/SearchResultList";
import { useGetAllProductsQuery } from "@/services/shoperzApi.service";
import { useDebounce } from "use-debounce";

const HeaderUpperbar = dynamic(
  () => import("@/layout/components/HeaderUpperbar"),
  { loading: () => <QuickLoadingModul /> }
);
const ActionMenu = dynamic(() => import("@/layout/ActionMenu"), {
  loading: () => <QuickLoadingModul />,
});
const HeaderCategorybar = dynamic(
  () => import("@/layout/components/HeaderCategorybar"),
  {
    loading: () => <QuickLoadingModul />,
  }
);

const Headerbar = () => {
  const { showCartDrawer } = useSelector(selectAppState);
  const headerbarRef = useRef<HTMLDivElement | null>(null);
  const [showMenu, setShowMenu] = useState(false);
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
        {showMenu && <ActionMenu setShowMenu={setShowMenu} />}
      </AnimatePresence>
      <section className="container max-w-5xl mx-auto flex flex-col justify-between items-center gap-3">
        <HeaderUpperbar />
        <HeaderControlsActions
          setShowMenu={setShowMenu}
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
