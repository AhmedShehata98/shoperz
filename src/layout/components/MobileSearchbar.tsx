import React from "react";
import { BsSearch } from "react-icons/bs";

function MobileSearchbar() {
  return (
    <form
      action=""
      className="relative w-[95%] flex items-center justify-between mx-auto mb-3 md:hidden"
    >
      <input
        type="search"
        name=""
        id=""
        className="w-full bg-Grey-100 border border-Primary-100 py-2 ps-4 pe-20 rounded-full rounded-bl-full focus:border-Primary-600 focus:outline-none"
        placeholder="search on products"
      />
      <button
        type="submit"
        id="search0btn"
        className="bg-Primary-600 px-6 py-3 text-white rounded-3xl text-xl absolute top-1/2 -translate-y-1/2 right-0 focus:bg-Primary-700"
      >
        <BsSearch />
      </button>
    </form>
  );
}

export default MobileSearchbar;
