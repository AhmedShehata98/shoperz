import React, { useEffect, useState } from "react";
import { BsFillHeartFill, BsSearch } from "react-icons/bs";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Logo from "../../components/Logo";
import { useDispatch, useSelector } from "react-redux";
import { selectAppState, setShowCartDrawer } from "@/redux/slices/app.slice";
import { selectAllCart } from "@/hooks/reduxHooks";
import UserDropMenu from "./UserDropMenu";
import UserBtn from "./UserBtn";

function HeaderControlsActions() {
  const { cartLength } = useSelector(selectAppState);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const dispatch = useDispatch();
  const handleShowCart = () => {
    dispatch(setShowCartDrawer(true));
  };

  const handleBodyClickEvent = (ev: MouseEvent) => {
    if (ev.target?.id !== "user-btn") {
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
  return (
    <div className="w-full flex items-center  justify-between px-2 max-lg:pt-4 pb-4">
      <span className="flex items-center justify-center max-md:gap-4 gap-8">
        <button className="text-2xl text-gray-600 lg:hidden">
          <FiMenu />
        </button>
        <div className="">
          <Logo />
        </div>
      </span>

      <form
        action=""
        className="flex h-9 w-fit border-2 max-lg:my-6 border-sky-600 rounded-full overflow-hidden max-lg:hidden"
      >
        <input
          type="search"
          name="search-for-products"
          id="app-search-field"
          placeholder="search for products .."
          className="w-[70%] text-gray-600 bg-inherit h-full text-sm rounded-full px-3 focus:outline-none focus:bg-white"
        />
        <select
          name="select-category"
          id="categories"
          value={"all categories"}
          className="w-1/3 text-gray-500 uppercase text-sm bg-inherit accent-gray-700 focus:outline-none focus:border-sky-600"
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
        <button
          type="submit"
          id="search0btn"
          className="w-14 bg-sky-600 px-4 hover:bg-sky-500"
        >
          <BsSearch />
        </button>
      </form>
      <span className="relative flex items-center justify-between gap-6 text-gray-600">
        <UserBtn isAuthenticated={true} onClick={() => setShowUserMenu(true)} />
        {showUserMenu ? <UserDropMenu /> : null}
        <button type="button" className="flex items-center gap-2">
          <BsFillHeartFill />
          <p className="text-gray-500 text-xs uppercase pointer-events-none">
            1
          </p>
        </button>
        <button
          type="button"
          className="flex items-center gap-2"
          onClick={() => handleShowCart()}
        >
          <FaShoppingCart />
          <p className="text-gray-500 text-xs uppercase">{cartLength}</p>
        </button>
      </span>
    </div>
  );
}

export default HeaderControlsActions;
