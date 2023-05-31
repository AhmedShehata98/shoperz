import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { BsFillHeartFill, BsSearch } from "react-icons/bs";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Logo from "../../components/Logo";
import { useDispatch, useSelector } from "react-redux";
import { selectAppState, setShowCartDrawer } from "@/redux/slices/app.slice";
import UserDropMenu from "./UserDropMenu";
import UserBtn from "./UserBtn";
import Link from "next/link";
import { routes } from "@/constants/Routes";
import { useUserDataQuery } from "@/services/shoperzApi.service";

type Props = {
  setShowMenu: Dispatch<SetStateAction<boolean>>;
};
function HeaderControlsActions({ setShowMenu }: Props) {
  const tokenRef = useRef<string | undefined>(undefined);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const {
    data: userData,
    isSuccess: successUserData,
    isLoading: loadingUserData,
    isError: errorUserData,
  } = useUserDataQuery(tokenRef.current, {
    skip: !tokenRef.current ? true : false,
  });

  const {
    shoppingCart: { cart, order },
    wishList,
  } = routes;
  const { cartLength } = useSelector(selectAppState);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const dispatch = useDispatch();
  const handleShowCart = () => {
    dispatch(setShowCartDrawer(true));
  };

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
      tokenRef.current = token;
      setIsAuthenticated(true);
    }
    if (errorUserData || !token) {
      tokenRef.current = undefined;
      setIsAuthenticated(false);
    }
  }, [successUserData, loadingUserData, errorUserData]);

  return (
    <div className="w-full flex items-center  justify-between px-2 max-lg:pt-4 pb-4">
      <span className="flex items-center justify-center max-md:gap-4 gap-8">
        <button
          onClick={() => setShowMenu((e: boolean) => !e)}
          className="text-2xl text-gray-600 lg:hidden"
        >
          <FiMenu />
        </button>
        <div>
          <Logo />
        </div>
      </span>
      <form action="" className="shoperz-search-bar">
        <input
          type="search"
          name="search-for-products"
          id="app-search-field"
          placeholder="search for products .."
          className="shoperz-searchbar-input "
        />
        <select
          name="select-category"
          id="categories"
          value={"all categories"}
          className="shoperz-searchbar-select"
        >
          <option value="all categories">all categories</option>
          <option value="electronics">electronics</option>
          <option value="ketchin">ketchin</option>
          <option value="garden">garden</option>
          <option value="sports">sports</option>
          <option value="mens">mens</option>
          <option value="womens">womens</option>
          <option value="computers & accessories">
            computers & accessories
          </option>
          <option value="mobiles & accessories">mobiles & accessories</option>
          <option value="helthey">helthey</option>
          <option value="gifts">gifts</option>
          <option value="toys">toys</option>
          <option value="TV & Audio">TV & Audio</option>
        </select>
        <button type="submit" id="search0btn" className="shoperz-searchbar-btn">
          <BsSearch />
        </button>
      </form>
      <span className="headerar-actionsbtns-wrapper">
        {loadingUserData ? (
          <SkeletonUserBtn />
        ) : (
          <>
            <UserBtn
              isAuthenticated={isAuthenticated}
              name={userData?.data.user.fullname}
              onClick={() => setShowUserMenu((show) => !show)}
            />
            {showUserMenu ? <UserDropMenu /> : null}
          </>
        )}
        <Link href={{ pathname: wishList }} className="flex items-center gap-2">
          <BsFillHeartFill />
          <p className="text-gray-500 text-xs uppercase pointer-events-none">
            1
          </p>
        </Link>
        <Link
          href={{ pathname: order, query: { to: cart } }}
          className="flex items-center gap-2"
          // onClick={() => handleShowCart()}
        >
          <FaShoppingCart />
          <p className="text-gray-500 text-xs uppercase">{cartLength}</p>
        </Link>
      </span>
    </div>
  );
}

export default HeaderControlsActions;

function SkeletonUserBtn() {
  return (
    <div className="flex flex-col gap-1">
      <span className="block w-16 h-3 bg-Grey-200 rounded-lg animate-pulse"></span>
      <span className="block w-12 h-2 bg-Grey-200 rounded-lg animate-pulse"></span>
    </div>
  );
}
