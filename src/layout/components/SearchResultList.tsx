import React from "react";
import { motion } from "framer-motion";
import { routes } from "@/constants/Routes";
import Image from "next/image";
import { useRouter } from "next/router";
type Props = {
  searchResult: Products[] | undefined;
  query: string | undefined;
};
export default function SearchResultList({ query, searchResult }: Props) {
  const { push } = useRouter();
  const { shop } = routes;
  const getProductPreview = (id: string) => {
    push(`${shop}/${id}`);
  };

  return (
    <motion.ul
      className="absolute z-30 top-full left-0 w-full lg:w-3/6 lg:top-3/4 lg:left-1/2 lg:-translate-x-1/2 shadow-lg flex flex-col gap-2 bg-gray-300 px-4 py-2"
      id="search-products-wrapper"
    >
      {/* <li>there is no products with this name .</li> */}
      {searchResult?.map((product) => (
        <li
          key={product._id}
          className="flex gap-4 justify-between items-start p-2 border border-transparent cursor-pointer hover:border-gray-300 rounded-md hover:bg-gray-200"
          onClick={() => getProductPreview(product._id)}
        >
          <figure className="w-16 rounded-md overflow-hidden shadow-md">
            <Image
              src={product.thumbnail}
              alt={product.name}
              width={64}
              height={64}
              className="max-w-full object-cover"
            />
          </figure>
          <span className="w-4/5">
            <p className="text-sm text-Grey-700 uppercase">
              {product.category_id.name ?? "NA-NA"}
            </p>
            <h5 className="text-Grey-800 capitalize">{product.name}</h5>
          </span>
        </li>
      ))}
    </motion.ul>
  );
}
