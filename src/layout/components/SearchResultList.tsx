import React from "react";
import { motion } from "framer-motion";
import { BiSearchAlt2 } from "react-icons/bi";
import Link from "next/link";
import { routes } from "@/constants/Routes";
type Props = {
  searchData: Omit<
    Products,
    | "description"
    | "price"
    | "images"
    | "category_id"
    | "sku"
    | "brand"
    | "colors"
    | "stock"
    | "discount"
    | "rating"
    | "createdAt"
    | "updatedAt"
    | "__v"
  >[];
  resultsLength: number;
  setQueryField: React.Dispatch<React.SetStateAction<string>>;
};
export default function SearchResultList({
  setQueryField,
  resultsLength,
  searchData,
}: Props) {
  const handleSelectResult = () => {
    setQueryField("");
  };

  return (
    <motion.ul
      variants={{
        visible: { opacity: 1, translateY: "-20px" },
        hidden: { opacity: 0, translateY: "0px" },
      }}
      className="absolute z-30 top-full w-full flex flex-col items-start justify-center shadow-md border border-Grey-200 bg-Grey-100 rounded-md p-2"
    >
      {searchData.map((res) => (
        <motion.li
          variants={{
            visible: { opacity: 1, translateX: "8px" },
            hidden: { opacity: 0, translateX: "0px" },
          }}
          initial={"hidden"}
          animate={"visible"}
          key={res._id}
          className="w-[97%] flex items-center justify-start px-3 py-2 hover:bg-Grey-200 cursor-pointer"
        >
          <Link
            href={{
              pathname: routes.shop,
              query: { q: encodeURIComponent(res.name) },
            }}
            className="w-full flex items-center justify-start"
            onClick={() => handleSelectResult()}
          >
            {/* <figure className="w-20 overflow-hidden rounded">
              <img src={res.thumbnail} alt={"product-prev-img"} />
            </figure> */}
            <span className="flex items-center justify-center">
              <BiSearchAlt2 className="block text-lg me-3 rounded-full text-Grey-700" />
              <small>{res.name}</small>
            </span>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}
