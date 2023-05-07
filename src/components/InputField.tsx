import React from "react";
import { BsSearch } from "react-icons/bs";

type Props = {};

const InputField = (props: Props) => {
  return (
    <form
      action=""
      className="flex h-9 w-fit border-2 max-lg:my-6 border-sky-600 rounded-full overflow-hidden"
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
        <option value="computers & accessories">computers & accessories</option>
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
  );
};

export default InputField;
