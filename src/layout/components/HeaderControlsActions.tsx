import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BsFillHeartFill, BsSearch } from "react-icons/bs";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAppState,
  setCartLength,
  setIsLoggedIn,
} from "@/redux/slices/app.slice";
import Link from "next/link";
import { routes } from "@/constants/Routes";
import {
  useGetCartItemsQuery,
  useUserDataQuery,
} from "@/services/shoperzApi.service";
import SearchBox from "./SearchBox";
import dynamic from "next/dynamic";
import QuickLoadingModul from "../QuickLoadingModul";
const Logo = dynamic(() => import("../../components/Logo"), {
  loading: () => <QuickLoadingModul />,
});
const UserBtn = dynamic(() => import("./UserBtn"), {
  loading: () => <QuickLoadingModul />,
});
const UserDropMenu = dynamic(() => import("./UserDropMenu"), {
  loading: () => <QuickLoadingModul />,
});

type Props = {
  setShowMenu: Dispatch<SetStateAction<boolean>>;
};
function HeaderControlsActions({ setShowMenu }: Props) {
  const { cartLength, isLoggedIn } = useSelector(selectAppState);
  const dispacth = useDispatch();
  const [token, setToken] = useState<string | undefined>(undefined);

  const {
    data: userData,
    isSuccess: successUserData,
    isLoading: loadingUserData,
    isError: errorUserData,
  } = useUserDataQuery(token, {
    skip: !token ? true : false,
  });
  const { data: cartItems } = useGetCartItemsQuery(token!, {
    skip: !token ? true : false,
  });

  const {
    shoppingCart,

    wishList,
  } = routes;
  const [showUserMenu, setShowUserMenu] = useState(false);
  const handleBodyClickEvent = (ev: MouseEvent) => {
    const clickArea = ev.target as HTMLElement;
    if (clickArea.id !== "user-btn") {
      setShowUserMenu(false);
    }
  };
  useEffect(() => {
    document.body.addEventListener("click", (ev: MouseEvent) => {
      handleBodyClickEvent(ev);
    });
    return () => {
      document.body.removeEventListener("click", (ev: MouseEvent) => {
        handleBodyClickEvent(ev);
      });
    };
  }, []);
  useEffect(() => {
    const token = document.cookie.split("=")[1];
    if (token) {
      setToken(token);
      dispacth(setIsLoggedIn(true));
    }
    if (errorUserData || !token) {
      setToken(undefined);
      dispacth(setIsLoggedIn(false));
    }
  }, [successUserData, loadingUserData, errorUserData, dispacth]);
  useEffect(() => {
    if (cartItems?.userCart) {
      dispacth(setCartLength(cartItems?.userCart.items.length));
    }
  }, [cartItems, dispacth]);

  return (
    <div className="header-control-actions">
      <span className="flex items-center justify-center max-md:gap-4 gap-8">
        <button
          onClick={() => setShowMenu((e: boolean) => !e)}
          className="text-2xl text-gray-600 lg:hidden"
          id="action-menu-btn"
        >
          <RiMenu2Fill className="pointer-events-none" />
        </button>
        <div>
          <Logo />
        </div>
      </span>
      <SearchBox />
      <span className="headerar-actionsbtns-wrapper">
        {loadingUserData ? (
          <SkeletonUserBtn />
        ) : (
          <>
            <UserBtn
              isAuthenticated={isLoggedIn}
              name={userData?.data.user.fullname}
              onClick={() => setShowUserMenu((show) => !show)}
            />
            {showUserMenu ? <UserDropMenu /> : null}
          </>
        )}
        <Link href={{ pathname: wishList }} className="flex items-center gap-2">
          <BsFillHeartFill />
          <ItemsCountingLength length={0} />
        </Link>
        <Link
          href={{ pathname: shoppingCart }}
          className="flex items-center gap-2"
        >
          <FaShoppingCart />
          <ItemsCountingLength length={cartLength} />
        </Link>
      </span>
    </div>
  );
}

export default HeaderControlsActions;

function SkeletonUserBtn() {
  return (
    <div className="flex flex-col gap-1 max-md:hidden">
      <span className="block w-16 h-3 bg-Grey-200 rounded-lg animate-pulse"></span>
      <span className="block w-12 h-2 bg-Grey-200 rounded-lg animate-pulse"></span>
    </div>
  );
}

type CartItemsLengthProps = {
  length: number;
};
function ItemsCountingLength({ length }: CartItemsLengthProps) {
  return (
    <p
      className={`${
        length >= 1 ? "text-red-700 bg-red-100" : "text-gray-500"
      }  w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold uppercase`}
    >
      {length}
    </p>
  );
}
